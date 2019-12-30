/* jshint esversion:9*/
/* eslint-disable require-jsdoc */
import {LitElement, html, css} from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from './store.js';
import { buttonClicked} from './actions/app'

export class TrippleByte extends connect(store)( LitElement) {

  /**
   * lit-element observed properties
   */
  static get properties(){
    return {
      clicked: Boolean,
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
`]
}

/**
 * called when the component is created but before it is attached to the dom
 */
  constructor(){
    super();
    this.clicked = false;
  }

  /**
   * called after the first render, the shadow-dom is attached now.
   */
  firstUpdated(changedProperties){
    console.log('first updated', changedProperties);
  }

  /**
   *  Invoked when a component is added to the document’s DOM.
   */
  connectedCallback() {
    super.connectedCallback();
  
    console.log('connected');
  }

  /**
   *  Invoked when a component is removed from the document’s DOM.
   */
  disconnectedCallback() {
    super.disconnectedCallback();
  
    console.log('disconnected');
  }

  attributeChangedCallback(name, oldValue, newValue){
    super.attributeChangedCallback();
    console.log('attribute changed', e);
  }

  render(){
    return html`
  <h1 class="${this.clicked? "clicked" : ""}">tripple-byte</h1>
  <button @click="${()=>store.dispatch(buttonClicked())}">click me</button>
    `;
  }

stateChanged(state) {
console.log(state);
this.clicked = state.app.click;
}

updated(changedProperties) {
  console.log(changedProperties);
}

}

customElements.define('tripple-byte',TrippleByte)
