import './app.element.css';
import './views';

export class AppElement extends HTMLElement {
  public static observedAttributes = [];


  connectedCallback() {
    document.title = 'Three Voxel Builder Demo'
    this.innerHTML = `
      <three-preview />
    `;
  }
}
customElements.define('app-root', AppElement);
