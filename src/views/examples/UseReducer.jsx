import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
};

const UseReducer = (props) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "numberAdd2":
                return { ...state, number: state.number + 2 };
            case "login":
                return { ...state, user: { name: action.payload.name } };
            case "numberMult7":
                return { ...state, number: state.number * 7 };
            case "numberDivide25":
                return { ...state, number: state.number / 25 };
            case "round":
                return { ...state, number: parseInt(state.number) };
            case "changeNumber":
                return { ...state, number: action.payload.number };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? (
                    <span className="text">{state.user.name}</span>
                ) : (
                    <span className="text">Sem Usuário</span>
                )}

                <span className="text">{state.number}</span>
                <div>
                    <button
                        className="btn"
                        onClick={() =>
                            dispatch({
                                type: "login",
                                payload: { name: "Maria" },
                            })
                        }
                    >
                        Login
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "numberAdd2" })}
                    >
                        +2
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "numberMult7" })}
                    >
                        x7
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "numberDivide25" })}
                    >
                        /25
                    </button>
                    <button
                        className="btn"
                        onClick={() => dispatch({ type: "round" })}
                    >
                        Round
                    </button>
                    <button
                        className="btn"
                        onClick={() =>
                            dispatch({
                                type: "changeNumber",
                                payload: { number: 10 },
                            })
                        }
                    >
                        Set number
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UseReducer;
