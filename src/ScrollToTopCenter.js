import { Fragment, useEffect } from "react";
import { useLocation, withRouter, useHistory } from "react-router-dom";

function ScrollToTop (props) { //({ history, children })

    //const history = useHistory(); //ok too
    const { history, children } = props; //or {location:pathname} //ok
    const location = useLocation(); //or {pathname}

    const { pathname } = location;

    useEffect(() => {
      const unlisten = history.listen(() => {
        window.scrollTo({ 
            left: (document.body.scrollWidth - window.innerWidth) / 2 , 
            top: 0,
            behavior: "smooth"
        });
      });
      return () => {
        unlisten();
      }
    }, [pathname, history]); //or location.pathname or [] or props.location.pathname
  
    return <Fragment>{children}</Fragment>; //or return {children}; but must be wrapped in withRouter
  }
  
  export default withRouter(ScrollToTop); //opt if return <></>