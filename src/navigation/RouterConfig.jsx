import React from 'react';
import {Route, Routes} from "react-router-dom";
import Ca from "../components/ca-entry-form/Ca";
import {CA} from "./CONSTANTS"

function RouterConfig() {
    return (
        <Routes>
            <Route exact path={CA} element={<Ca />} />
        </Routes>
    );
}
export default RouterConfig;