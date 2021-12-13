const incrementAction = {
    type: "INCREMENT"
}

const decrementAction = {
    type: "DECREMENT"
}

const incrementByTen = {
    type: "INCREMENT10"
}

const decrementByTen = {
    type: "DECREMENT10"
}

const reset = {
    type: "RESET"
}

const initialState = 0;

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT10':
            return state + 10;
        case 'DECREMENT10':
            return state - 10;
        case 'RESET':
            return 0
        default:
            return state;
    }
}


const counterRender = document.getElementById('counter-render');
const render = () => {
    counterRender.innerText = store.getState();
}

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);

store.subscribe(render)
render()


console.log(store);

document.getElementById('button-increment').addEventListener('click', () => {
    store.dispatch(incrementAction)
})

document.getElementById('button-decrement').addEventListener('click', () => {
    store.dispatch(decrementAction)
})

document.getElementById('button-increment10').addEventListener('click', () => {
    store.dispatch(incrementByTen)
})

document.getElementById('button-decrement10').addEventListener('click', () => {
    store.dispatch(decrementByTen)
})

document.getElementById('button-reset').addEventListener('click', () => {
    store.dispatch(reset)
})