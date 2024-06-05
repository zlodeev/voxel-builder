import './three-preview.element.css';
import {threeVoxelBuilder} from '@voxel-builder/three-voxel-builder';

export class ThreePreviewElement extends HTMLElement {
  connectedCallback() {
    threeVoxelBuilder(this);
  }
}
customElements.define('three-preview', ThreePreviewElement);
