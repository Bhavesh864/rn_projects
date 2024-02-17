import React, { useState, useReducer } from 'react'
import { Text, View } from 'react-native'
import ColorCounter from '../components/ColorCounter';

const CHANGE_COLOR = 15;

const reducer = (state, action) => {
    //state === {red: 0, green: 0, blue: 0}
    //action === {type: 'change_red' || 'change_green' || 'change_blue' , payload: 15 || -15}

    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload };
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload };
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload };
        default:
            return state;
    }
}

const SquareScreen = () => {
    // const [red, setRed] = useState(0);
    // const [blue, setBlue] = useState(0);
    // const [green, setGreen] = useState(0);

    // const setColor = (color, change) => {
    //     switch (color) {
    //         case 'red':
    //             red + change > 255 || red + change < 0 ? null : setRed(red + change);
    //             return;
    //         case 'green':
    //             green + change > 255 || green + change < 0 ? null : setGreen(green + change);
    //             return;
    //         case 'blue':
    //             blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
    //             return;
    //         default:
    //             return;
    //     }
    // }

    const [state, runReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, blue, green } = state;
    console.log(state);

    return (
        <View>
            <ColorCounter
                color={'Red'}
                // onIncrease={() => setColor('red', CHANGE_COLOR)}
                // onDecrease={() => setColor('red', -1 * CHANGE_COLOR)}
                onIncrease={() => runReducer({ type: 'change_red', payload: CHANGE_COLOR })}
                onDecrease={() => runReducer({ type: 'change_red', payload: -1 * CHANGE_COLOR })}
            />
            <ColorCounter
                color={'Blue'}
                // onIncrease={() => setColor('blue', CHANGE_COLOR)}
                // onDecrease={() => setColor('blue', -1 * CHANGE_COLOR)}
                onIncrease={() => runReducer({ type: 'change_blue', payload: CHANGE_COLOR })}
                onDecrease={() => runReducer({ type: 'change_blue', payload: -1 * CHANGE_COLOR })}
            />
            <ColorCounter
                color={'Green'}
                // onIncrease={() => setColor('green', CHANGE_COLOR)}
                // onDecrease={() => setColor('green', -1 * CHANGE_COLOR)}
                onIncrease={() => runReducer({ type: 'change_green', payload: CHANGE_COLOR })}
                onDecrease={() => runReducer({ type: 'change_green', payload: -1 * CHANGE_COLOR })}
            />
            <View
                style={{
                    height: 200,
                    width: 200,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>
    )
}

export default SquareScreen
