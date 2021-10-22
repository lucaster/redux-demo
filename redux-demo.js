"use strict";
// tsc -w -p .
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var NULL_STATE = {
    counter: 0,
};
var reducer = function (state, action) {
    console.debug('reducer is called');
    if (action.type === 'increment') {
        return {
            counter: state ? state.counter + 1 : 0,
        };
    }
    if (state === void 0) {
        return {
            counter: 0
        };
    }
    return __assign({}, state);
};
// createStore() executes the reducer immediately!
// If not provided to createStore(), the initial state is undefined.
var store = (0, redux_1.createStore)(reducer);
console.log(store.getState());
var subber = function () {
    console.log('subber', store.getState());
};
var unsub = store.subscribe(subber);
store.dispatch({
    type: 'increment'
});
unsub();
