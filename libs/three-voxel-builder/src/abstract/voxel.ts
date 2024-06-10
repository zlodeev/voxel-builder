import { BoxGeometry, BufferGeometry, Mesh, MeshBasicMaterial, MeshLambertMaterial } from 'three';

const VOXEL_GEOMETRY = new BoxGeometry(1, 1, 1);
const VOXEL_MATERIAL = new MeshLambertMaterial({
  color: 0xe96823,
  // side: DoubleSide,
});

export class Voxel {
  geometry = new BufferGeometry().copy(VOXEL_GEOMETRY);
  material = new MeshBasicMaterial().copy(VOXEL_MATERIAL);
  mesh = new Mesh(this.geometry, this.material);
  constructor() {
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.position.set(0.5, 0.5, 0.5);
  }
}
