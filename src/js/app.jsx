import React from "react";
import ReactDOM from 'react-dom';
import NewTab from "./newtab";

// Import root LESS file so webpack finds & renders it out to main.css
import '../style/main.less';

ReactDOM.render(<NewTab />, document.getElementById('mainDiv'));