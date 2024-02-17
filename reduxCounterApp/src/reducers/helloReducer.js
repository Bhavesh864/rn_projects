import { PRESSED_HELLO_BUTTON } from "../actions/type";

const initialState = {
    helloText: 'Hello!',
    pressedButton: 'false',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case PRESSED_HELLO_BUTTON: {
            return { ...state, pressedButton: 'true' }
        }
        default: {
            return state;
        }
    }
}