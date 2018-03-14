//1. Import our dependencies brought in from package.json
import React from "react";

import "./css/style.css";

//2. We need React Dom to mount the component to the DOM
//   render is a method
import { render } from "react-dom";

//3. Import the Router component
import Router from "./components/Router"

//4. Render the Router component, and a mounting point
render(<Router /> , document.querySelector('#main'));
