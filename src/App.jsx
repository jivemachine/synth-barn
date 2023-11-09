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
                        <h1 style={{ background: "black", color: "white" }}>Welcom to Synth Barn</h1>
                    </div>
                </div>


                {/* Options & Cart titles */}
                <div className="row m-5">
                    <div className="col-7">
                        <h3>Used Synths</h3>
                    </div>
                    <div className="col-5">
                        <h3>Your Cart</h3>
                    </div>
                </div>

                {/* used synth cards */}
                <div className="row m-4">
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={require('/Users/partyzone/Documents/Source/covalence/react/HOOKS/synth-barn/src/components/images/Juno106.jpg')} style={{ width: "auto", height: 'auto'}} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Juno-106</h5>
                                <p className="card-text">Roland Juno-106 synthesizer</p>
                                <a href="#" className="btn btn-primary">Add 2 Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={require('/Users/partyzone/Documents/Source/covalence/react/HOOKS/synth-barn/src/components/images/dx7.jpeg')} style={{ width: "auto", height: 'auto'}} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">DX7</h5>
                                <p className="card-text">Yamaha DX7 Synthesizer</p>
                                <a href="#" className="btn btn-primary">Add 2 Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* row 2 */}
                <div className="row m-4">
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={require('/Users/partyzone/Documents/Source/covalence/react/HOOKS/synth-barn/src/components/images/Jupiter8.jpg')} style={{ width: "auto", height: 'auto'}} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Jupiter 8</h5>
                                <p className="card-text">Roland Juno 8 synthesizer</p>
                                <a href="#" className="btn btn-primary">Add 2 Cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={require('/Users/partyzone/Documents/Source/covalence/react/HOOKS/synth-barn/src/components/images/Memorymoog.jpg')} style={{ width: "auto", height: 'auto'}} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Memory Moog</h5>
                                <p className="card-text">Moog Memorymoog Synthesizer</p>
                                <a href="#" className="btn btn-primary">Add 2 Cart</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default App;