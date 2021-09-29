import { Fragment, useEffect } from "react";
import { useLocation, withRouter } from "react-router-dom";

function ScrollToTop (props) { 
    
    // { children, history, location: {location} } ->[location] in useEffect 
    // { children, history, location: { pathname } } -> [pathname] in useeffect
    //or props
    //props -> const { history, children } = props; 
    const { history, children } = props;
    const location = useLocation(); // -> [location] in useeffect
    //const { pathname } = useLocation()  -> [pathname] in useeffect

    //props -> const { history, children, location } = props; -> [location.pathname] in useeffect
    //props -> const { history, children, location: {pathname} } = props; -> [pathname] in useeffect

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
    }, [location.pathname]); //or []
  
    return <Fragment>{children}</Fragment>; //or return {children}; but must be wrapped in withRouter
  }
  
  export default withRouter(ScrollToTop); //opt if <></> or <Fragment></Fragment>


/*
function ScrollToTop({ history, children }) {
    useEffect(() => {
      const unlisten = history.listen(() => {
        window.scrollTo((document.body.scrollWidth - window.innerWidth) / 2, 0);
      });
      return () => {
        unlisten();
      }
    }, []);
  
    return <Fragment>{children}</Fragment>;
  }
  
  export default withRouter(ScrollToTop);
*/

/*
function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, []);

  return (children);
}

export default withRouter(ScrollToTop);

*/

/*
export const ScrollToTop = ( { children} ) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ 
          left: (document.body.scrollWidth - window.innerWidth) / 2 , 
          top: 0,
          behavior: "smooth"
      });
    }, [location]);
  
    return <Fragment>{ children }</Fragment>
  };
*/



/*
function ScrollToTop ( props ) {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo({ 
          left: (document.body.scrollWidth - window.innerWidth) / 2 , 
          top: 0,
          behavior: "smooth"
      });
    }, [location]);
  
    return <>{ props.children }</>
  };

  export default withRouter(ScrollToTop);
  */

/*
function ScrollToTopFn (props) { //props or { children, location: {pathname} }
  const { pathname } = useLocation();

  useEffect(() => {
    //window.scrollTo(0, 0);
    window.scrollTo((document.body.scrollWidth - window.innerWidth) / 2, 0)
  }, [pathname]);

  return props.children || null; //return children; or return null;
}

export const ScrollToTop = withRouter(ScrollToTopFn)
*/
