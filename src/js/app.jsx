import React from "react";
import ReactDOM from 'react-dom';
import Newtab from "./components/Newtab";

// Import root LESS file so webpack finds & renders it out to main.css
import '../style/main.less';

ReactDOM.render(<Newtab />, document.getElementById('mainDiv'));