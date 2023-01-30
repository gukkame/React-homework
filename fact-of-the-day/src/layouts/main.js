
import React from "react";
import { RouterProvider, BrowserRouter } from "react-router-dom";
import router from "../router/router";

function Main() {
    return (
        <div>
             <h3> Main Page layout is here</h3>
            <RouterProvider router={router} />
        </div>
    )
}

export default Main;

