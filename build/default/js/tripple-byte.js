/* jshint esversion:9*/

/* eslint-disable require-jsdoc */
import { LitElement, html, css } from "../node_modules/lit-element/lit-element.js";
import { connect } from "../node_modules/pwa-helpers/connect-mixin.js";
import { store } from './store.js';
import { buttonClicked, observEvent } from "./actions/app.js";
import { Observable } from "../node_modules/rxjs/_esm5/index.js";
export class TrippleByte extends connect(store)(LitElement) {
  /**
   * lit-element observed properties
   */
  static get properties() {
    return {
      clicked: Boolean,
      observable: Function,
      count: Number
    };
  }
  /**
   * lit-element styles array. external style sheets can be added here.
   */


  static get styles() {
    return [css`
      .clicked{
        background-color:red;
      }
`];
  }
  /**
   * called when the component is created but before it is attached to the dom
   */


  constructor() {
    super();
    this.clicked = false;
    this.observable = Observable.create(observer => {
      var count = 0;
      observer.next(count);
      setInterval(() => {
        count += 1;
        count = count > 10 ? 0 : count;
        observer.next(count);
      }, 1000);
    });
    this.observable.subscribe(count => {
      store.dispatch(observEvent(count));
    });
  }
  /**
   * called after the first render, the shadow-dom is attached now.
   */


  firstUpdated(changedProperties) {
    console.log('first updated', changedProperties);
  }

  render() {
    return html`
    <style>
    h2 {
      background-color:rgb(${this.count * 25},${this.count * 25},${this.count * 25})
    }
    </style>
  <h1 class="${this.clicked ? "clicked" : ""}">tripple-byte</h1>
  <button @click="${() => store.dispatch(buttonClicked())}">click me</button>
  <h2> The current count is ${this.count} </h2>
    `;
  }

  stateChanged(state) {
    this.clicked = state.app.click;
    this.count = state.app.count;
  }

}
customElements.define('tripple-byte', TrippleByte);