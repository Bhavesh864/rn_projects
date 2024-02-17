import { COUNTER_DECREAMENT, COUNTER_INCREAMENT, COUNTER_CLEAR, COUNTER_SET } from "../actions/type";

export default (state = 0, action) => {
    switch (action.type) {
        case COUNTER_INCREAMENT:
            return state + 1;
        case COUNTER_DECREAMENT:
            return state - 1;
        case COUNTER_CLEAR:
            return 0;
        case COUNTER_SET:
            return action.payload;
        default:
            return state;
    }
}