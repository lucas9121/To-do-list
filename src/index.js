import { React, StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css"
import App from "./App"
import Layout from "./Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={ <Layout /> }>
                    <Route index element ={ <App />} />
                </Route>
            </Routes>
        </Router>
    </StrictMode>,
    document.getElementById('root')
)