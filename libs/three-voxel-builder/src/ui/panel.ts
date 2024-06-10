import './three-preview.element.css';

export class ThreePreviewElement extends HTMLElement {
  connectedCallback() {
    this.classList.add('');
    this.innerHTML = '';
  }
}

customElements.define('tvb-panel', ThreePreviewElement);
