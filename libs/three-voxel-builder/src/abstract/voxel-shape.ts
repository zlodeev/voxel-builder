import { Group, Vector2 } from 'three';
import { Voxel } from './voxel';

export class VoxelBlock extends Group {
  constructor(...points: Vector2[]) {
    super();

    let maxX = 0;
    let maxY = 0;
    let minX = 0;
    let minY = 0;

    for (let index = 0; index < points.length; index++) {
      maxX = Math.max(points[index].x, maxX);
      maxY = Math.max(points[index].y, maxY);
      minX = Math.min(points[index].x, minX);
      minY = Math.min(points[index].y, minY);
    }

    let indexX = minX;
    let indexY = minY;

    while (indexX < maxX && indexY < maxY) {
      const voxel = new Voxel();

      voxel.mesh.position.set(indexX, 0, indexY);
      this.add(voxel.mesh);

      indexY += 1;

      if (indexY >= maxY) {
        indexY = minY;
        indexX += 1;
      }
    }
  }
}
