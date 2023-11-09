import { useReducer, useState } from "react";

const initialState = {

};

const App = () => {
    return (
        <>
            <div className="container text-center">

                <div className="row justify-content-start">
                    {/* header  */}
                    <div className="col-12 m-1">
                        <h1 style={{background: "black", color: "white"}}>Welcom to Synth Barn</h1>
                    </div>
                </div>


                {/* Options & Cart titles */}
                <div className="row justify-content-center m-5">
                    <div className="col-5">
                        <h3>Used Synths</h3>
                    </div>
                    <div className="col-5">
                        <h3>Your Cart</h3>
                    </div>
                </div>
            
            </div>
        </>
    );
};

export default App;