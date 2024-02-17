import React, { useReducer } from 'react';

export default (reducer, action, initialValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialValue);

        // action === {addblogpost: (dispatch) => {return () => {}} };

        const boundActions = {};
        for (let Key in action) {
            boundActions[Key] = action[Key](dispatch);
        }

        return <Context.Provider value={{ state, ...boundActions }}>
            {children}
        </Context.Provider>;
    }

    return { Context, Provider };
}