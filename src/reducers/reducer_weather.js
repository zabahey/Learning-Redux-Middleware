import { FETCH_WEATHER, RESET_WEATHER } from "../actions/index";
// Must not mutate state in reducer. It must be return completely new state instead
export default function(state= [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            //return state.concat([action.payload.data]);
            return [ action.payload.data, ...state];// [city, city, city]
        case RESET_WEATHER:
            return action.payload;
    }
    return state;
}