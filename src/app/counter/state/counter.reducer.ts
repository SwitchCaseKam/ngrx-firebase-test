import { createReducer, on } from "@ngrx/store"
import { decrement, increment, pow, reset, sqrt } from "./counter.actions";
import { CounterState } from "./counter.state";


const initialState: CounterState = {
    value: 0
};

export const counterReducer = createReducer(
    initialState,
    on(increment, (state: CounterState) => {
        return { 
            ...state,
            value: state.value + 1
        }
    }),
    on(decrement, (state: CounterState) => {
        return { 
            ...state,
            value: state.value - 1
        }
    }),
    on(reset, (state: CounterState) => {
        return { 
            ...state,
            value: 0
        }
    }),
    on(pow, (state: CounterState, action) => {
        return { 
            ...state,
            value: state.value**action.n
        }
    }),
    on(sqrt, (state: CounterState) => {
        console.log()
        return { 
            ...state,
            value: state.value**(1/2)
        }
    })
);

