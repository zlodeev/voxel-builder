import { VoxelBuilder } from './abstract';

export function threeVoxelBuilder(viewCtn: HTMLElement): string {
  const builder = new VoxelBuilder(viewCtn);

  return 'three-voxel-builder';
}
