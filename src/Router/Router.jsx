import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "../Components/Nav";
import Index from "../Components/Index";

export default function RouterNode() {
    return (
        <React.Fragment>
            <Router>

                <Nav />
                <Routes>
                    <Route path="/" elements={<Index />} />
                </Routes>

            </Router>
        </React.Fragment>
    );
}
