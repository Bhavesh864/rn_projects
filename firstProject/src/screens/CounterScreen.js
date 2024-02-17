import React, { useState, useReducer } from 'react'
import { Text, View, Button } from 'react-native'

const reducer = (state, action) => {
    switch (action.type) {
        case 'increase':
            return { counter: state.counter + action.payload };
        case 'decrease':
            return { counter: state.counter + action.payload };
        default:
            return 0;

    }
}

const CounterScreen = () => {
    // const [counter, setCounter] = useState(0);
    const [state, runReducer] = useReducer(reducer, { counter: 0 });

    return (
        <View>
            <Button title='Increase' onPress={() => {
                // setCounter(counter + 1)
                runReducer({ type: 'increase', payload: 1 });
            }
            } />
            <Button title='Decrease' onPress={() => {
                // setCounter(counter - 1)
                runReducer({ type: 'decrease', payload: - 1 });
            }
            } />
            <Text>Current Counter:  {state.counter}</Text>
        </View>
    )
}

export default CounterScreen
