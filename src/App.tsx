import React from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home/components/Home";
import MothStatistics from "./pages/MonthStatistics/components/MothStatistics";
import Header from "./shared/Header/Header";
import Popup from "./shared/Popup/Popup";

function App() {
    return (
        <div className={"global__container"}>
            {/*<Popup/>*/}
            <div className="container">

                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/month-statistics" element={<MothStatistics/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
