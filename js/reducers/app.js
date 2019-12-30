
/* jshint esversion:9*/
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import {
  BUTTON_CLICKED,
  OBSERV_EVENT
} from '../actions/app.js';

const INITIAL_STATE = {
  click: false,
  count:0,
};

const app = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case BUTTON_CLICKED:
      return {
        ...state,
        click: !state.click
      };


    case OBSERV_EVENT:
      return {
        ...state,
        count: action.count,
      };

    default:
      return state;
  }
};

export default app;
