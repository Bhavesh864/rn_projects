import { COUNTER_DECREAMENT, COUNTER_INCREAMENT, COUNTER_CLEAR, COUNTER_SET } from "../actions/type";

const counterIncreament = () => {
    return {
        type: COUNTER_INCREAMENT
    }
}

const counterDecreament = () => {
    return {
        type: COUNTER_DECREAMENT
    }
}
const counterClear = () => {
    return {
        type: COUNTER_CLEAR
    }
}
const counterSet = (inputNumber) => {
    return {
        type: COUNTER_SET,
        payload: inputNumber,
    }
}



export { counterIncreament, counterDecreament, counterClear, counterSet };