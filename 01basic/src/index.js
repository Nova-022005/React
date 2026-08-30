import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

//? DOM is like  a tree , React creates it's own DOM
//? Which is known as Virtual DOM

root.render(
  <>
    <App /> 
    
  </>
);
//! react give you power to render html by js

//* React script  automatically load index.js in index.html and other scripts 
//? react-scripts automatically bundles and loads index.js into index.html, along with other scripts, so we don’t need to add a <script> tag manually.