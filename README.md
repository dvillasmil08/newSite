## Quick start

1.  Download the project's zip
2.  Make sure you have node.js (<https://nodejs.org/en/?ref=creativetim>) installed
3.  Type `npm install` in terminal/console in the source folder where `package.json` is located
4.  You will find all the branding colors inside `src/assets/scss/now-ui-kit/_variables.scss`. You can change them with a `HEX` value or with other predefined variables.
5.  Run in terminal `npm start`.

## File Structure

Within the download you'll find the following directories and files:
```
now-ui-kit-react
.
├── CHANGELOG.md
├── LICENSE.md
├── README.md
├── jsconfig.json
├── package.json
├── public
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │   ├── css
    │   ├── demo
    │   ├── fonts
    │   ├── img
    │   │   ├── flags
    │   │   └── nucleo-logo.svg
    │   └── scss
    │       ├── now-ui-kit
    │       │   ├── cards
    │       │   ├── mixins
    │       │   └── plugins
    │       ├── react
    │       │   ├── now-ui-kit
    │       │   ├── plugins
    │       │   └── react-differences.scss
    │       └── now-ui-kit.scss
    ├── components
    │   ├── Footers
    │   │   ├── DarkFooter.js
    │   │   ├── DefaultFooter.js
    │   │   └── TransparentFooter.js
    │   ├── Headers
    │   │   ├── IndexHeader.js
    │   │   ├── LandingPageHeader.js
    │   │   └── ProfilePageHeader.js
    │   └── Navbars
    │       ├── ExamplesNavbar.js
    │       └── IndexNavbar.js
    ├── index.js
    └── views
        ├── Index.js
        ├── NucleoIcons.js
        ├── examples
        │   ├── LandingPage.js
        │   ├── LoginPage.js
        │   └── ProfilePage.js
        └── index-sections
            ├── BasicElements.js
            ├── Carousel.js
            ├── CompleteExamples.js
            ├── Download.js
            ├── Examples.js
            ├── Images.js
            ├── Javascript.js
            ├── Navbars.js
            ├── Notifications.js
            ├── NucleoIcons.js
            ├── Pagination.js
            ├── SignUp.js
            ├── Tabs.js
            └── Typography.js
```