# BP: React/Redux/ReactRouter
This boilerplate contains a webpack and webpack-dev-server setup for React, Redux, and React Router. There are loaders and plugins to handle the generation of the index.html file, the loading of image files, the conversion of JSX and ES6 JavaScript to ES5, the conversion of SCSS/SASS to CSS, and the extraction plus optimization of the CSS.


## CLI Scripts:

#### Development: 
```
npm run start
```

#### Production: 
```
npm run prod
```


## Loaders & Features:

webpack-dev-server with hot reloading

redux/react-redux for application-wide state management

react-router-dom for routing

babel-preset-env/babel-preset-react to convert JSX and ES6 JavaScript

sass-loader to convert SCSS/SASS

mini-css-extract-plugin to extract one CSS file per JS file that contains CSS 

optimize-css-assets-webpack-plugin to optimize the CSS output

postcss-loader for auto-prefixing the CSS output

html-webpack-plugin for the index.html

file-loader to search for and load image files of formats: "jpg|png|gif|jpeg"
