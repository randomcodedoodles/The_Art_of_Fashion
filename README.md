https://the-art-of-fashion.firebaseapp.com/

Resources: 

There are separate designs for the desktop and mobile views of the site. The desktop design can
be found at https://invis.io/92U5LEC4HFW. The mobile design can be found at
https://invis.io/7HU5N51T4US.

A REST API that had been created is used in this App. Its root URL is https://interview-assessment.api.avamae.co.uk, and documentation for its endpoints can be found at
https://interview-assessment.api.avamae.co.uk/index.html.

The design has three pages:

• A home page with some static content, including images and text. The top carousel should
load data (image and strapline text) from an external REST endpoint, listed below.

• An about us page, with purely static content.

• A contact-us page consisting of a single form, which on submission should post data to an
external REST endpoint. The form should be validated and behave correctly when the API
responds.

A nav bar is present on all three pages, as well as a footer element at the bottom of the
page. The design contains a “Log In” button, but this does not need to do anything in the app.

The following libraries are used: 

• For the animated carousel, Swiper.

• For routing between pages, React Router or Reach Router.

The requiremnts: 

• The app should be a Single Page Application (SPA), made with React.

• The most recent version of React should be used. Use of React hooks is permitted, but not
required.

• The app should be bundled and minified using a tool such as WebPack or Parcel. Use of
the Create React App tool to achieve this is encouraged.

• Use of TypeScript is permitted, but not required. Use of other compile-to-JavaScript
language is not permitted.

• Components requiring external information from APIs should display an appropriate view
while data is pending, as well as when they have encountered an error.

• For styling, use external style sheets rather than inline styles. Use of a CSS preprocessor,
such as SASS, is permitted. Use of a styling framework like Bootstrap or Bourbon is not.

• The app should use a routing library to simulate movement between the following routes:
o Home: /
o About Us: /about-us
o Contact Us: /contact-us
