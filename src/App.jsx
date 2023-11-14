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
                items: [...state.items, { id: state.counter, item: 'juno-106', price: 2400, quantity: 1 }],
                total: state.total + 2400
            };
        case 'ADD2CART-dx7':
            return {
                counter: state.counter + 1,
                items: [...state.items, { id: state.counter, item: 'DX7', price: 800, quantity: 1 }],
                total: state.total + 800
            };
        case 'ADD2CART-jupiter8':
            return {
                counter: state.counter + 1,
                items: [...state.items, { id: state.counter, item: 'jupiter8', price: 29900, quantity: 1 }],
                total: state.total + 29900
            };
        case 'ADD2CART-memorymoog':
            return {
                counter: state.counter + 1,
                items: [...state.items, { id: state.counter, item: 'memorymoog', price: 10000, quantity: 1 }],
                total: state.total + 10000
            };
        case 'INCREMENT-juno-106':
            return {
                counter: state.counter + 1,
                items: [...state.items, { id: state.counter, item: 'juno-106', price: 2400, quantity: +1 }],
                total: state.total + 2400
            };
        case 'DECREMENT-juno-106':
            return {
                counter: state.counter - 1,
                items: [...state.items, { id: state.counter, item: 'juno-106', price: 2400, quantity: -1 }],
                total: state.total - 2400
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
                                <p><b>Price:</b> 2400</p>
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
                                <p><b>Price:</b> 800</p>
                                <button onClick={() => dispatch({ type: 'ADD2CART-dx7' })} className="btn btn-primary">Add 2 Cart</button>
                            </div>
                        </div>
                    </div>


                    {/* cart card */}
                    <div className="col-4">
                        <div className="card" style={{ width: "22rem" }}>
                            <div className="card-body">
                                <h5 className="card-title"></h5>
                                <p className="card-text" style={{ textAlign: "left" }}>
                                    <ul>
                                        {state.items.map((itemlog, idx) => (
                                            <li className="mt-4" key={`item-${itemlog.id}`}>
                                                {itemlog.item}: <b>{itemlog.quantity}</b>
                                                <div className="btn-group" style={{ float: 'right', marginLeft: '-50%', marginRight: '1em', marginBottom: '-50%' }}>
                                                    <button type="button" className="btn btn-outline-success" onClick={() => dispatch({ type: `INCREMENT-${itemlog.item}` })}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                                                        </svg>
                                                        <span className="visually-hidden">Button</span>
                                                    </button>
                                                    <button type="button" className="btn btn-outline-danger" onClick={() => dispatch({ type: `DECREMENT-${itemlog.item}`})}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square-fill" viewBox="0 0 16 16">
                                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                                                        </svg>
                                                        <span className="visually-hidden">Button</span>
                                                    </button>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <b>
                                        <p>TOTAL: ${state.total}</p>
                                    </b>
                                </p>
                                <a href="#" className="btn btn-outline-dark">Go 2 Checkout</a>
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
                                <p><b>Price:</b> 29900</p>
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
                                <p><b>Price:</b> 10000</p>
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