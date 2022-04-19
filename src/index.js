import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css"
import App from "./App"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <StrictMode>
        <Router>
            <Routes>
                <Route path="/tasks" element={ <App /> } />
            </Routes>
        </Router>
    </StrictMode>,
    document.getElementById('root')
)