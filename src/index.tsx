import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

console.log('WASSUP DAWG');

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
