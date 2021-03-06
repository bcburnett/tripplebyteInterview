/* eslint-disable no-undef */

/* jshint esversion:9*/

/* jshint asi: true*/

/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import { createStore, compose, applyMiddleware, combineReducers } from "../node_modules/redux/es/redux.js";
import thunk from "../node_modules/redux-thunk/es/index.js";
import { lazyReducerEnhancer } from "../node_modules/pwa-helpers/lazy-reducer-enhancer.js";
import app from './reducers/app.js';
import { logger } from "./middleware/logger.js"; // Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // Initializes the Redux store with a lazyReducerEnhancer (so that you can
// lazily add reducers after the store has been created) and redux-thunk (so
// that you can dispatch async actions). See the "Redux and state management"
// section of the wiki for more details:
// https://github.com/Polymer/pwa-starter-kit/wiki/4.-Redux-and-state-management

export const store = createStore(state => state, devCompose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk), applyMiddleware(logger))); // Initially loaded reducers.

store.addReducers({
  app
});
window.store = store;