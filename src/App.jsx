import { useReducer, useState } from "react";

const initialState = {
    items: [],
    counter: 0,
    total: 0
};

// reducer function
function reducer(state, action) {
    switch (action.type) {
        case 'ADD2CART-juno106':
            return {
                counter: state.counter + 1,
                items: [...state.items, { id: state.counter, item: 'juno-106', price: 2400 }],
                total: state.total + 2400
            };
        case 'ADD2CART-dx7':
            return {
                counter: state.counter + 1,
                items: [...state.items, { id: state.counter, item: 'DX7', price: 800 }],
                total: state.total + 800
            };
        case 'ADD2CART-jupiter8':
            return {
                counter: state.counter + 1,
                items: [...state.items, { id: state.counter, item: 'jupiter8', price: 29900 }],
                total: state.total + 29900
            };
        case 'ADD2CART-memorymoog':
            return {
                counter: state.counter + 1,
                items: [...state.items, { id: state.counter, item: 'memorymoog', price: 10000 }],
                total: state.total + 10000
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

const App = () => {

    // add 2 cart
    const [state, dispatch] = useReducer(reducer, initialState);
    const [values, setValues] = useState({});

    const handleChanges = e => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleSubmit = () => {
        dispatch({
            type: "ADD2CART-juno106",
            item: "juno-106",
            price: 2600
        });
    }

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
                            <img src={require('/Users/partyzone/Documents/Source/covalence/react/HOOKS/synth-barn/src/components/images/Juno106.jpg')} style={{ width: "auto", height: 'auto' }} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Juno-106</h5>
                                <p className="card-text">Roland Juno-106 synthesizer</p>
                                <button onClick={() => dispatch({ type: 'ADD2CART-juno106' })} className="btn btn-primary">Add 2 Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={require('/Users/partyzone/Documents/Source/covalence/react/HOOKS/synth-barn/src/components/images/dx7.jpeg')} style={{ width: "auto", height: 'auto' }} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">DX7</h5>
                                <p className="card-text">Yamaha DX7 Synthesizer</p>
                                <button onClick={() => dispatch({ type: 'ADD2CART-dx7' })} className="btn btn-primary">Add 2 Cart</button>
                            </div>
                        </div>
                    </div>


                    {/* cart card */}
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text" style={{ textAlign: "left" }}>
                                    <ul>
                                        {state.items.map((itemlog, idx) => (
                                            <li key={`item-${itemlog.id}`}>
                                                {itemlog.item}: ${itemlog.price}
                                            </li>
                                        ))}
                                    </ul>
                                    <b>
                                        <p>TOTAL: ${state.total}</p>
                                    </b>
                                </p>
                                <a href="#" className="btn btn-primary">Go 2 Checkout</a>
                                <button onClick={() => dispatch({ type: 'RESET' })} className="btn btn-outline-danger m-1">Reset Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* row 2 */}
                <div className="row m-4">
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={require('/Users/partyzone/Documents/Source/covalence/react/HOOKS/synth-barn/src/components/images/Jupiter8.jpg')} style={{ width: "auto", height: 'auto' }} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Jupiter 8</h5>
                                <p className="card-text">Roland Juno 8 synthesizer</p>
                                <button onClick={() => dispatch({ type: 'ADD2CART-jupiter8' })} className="btn btn-primary">Add 2 Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={require('/Users/partyzone/Documents/Source/covalence/react/HOOKS/synth-barn/src/components/images/Memorymoog.jpg')} style={{ width: "auto", height: 'auto' }} className="card-img-top"></img>
                            <div className="card-body">
                                <h5 className="card-title">Memory Moog</h5>
                                <p className="card-text">Moog Memorymoog Synthesizer</p>
                                <button onClick={() => dispatch({ type: 'ADD2CART-memorymoog' })} className="btn btn-primary">Add 2 Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default App;