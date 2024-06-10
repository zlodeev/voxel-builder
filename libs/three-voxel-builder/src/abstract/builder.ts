import { Color, Fog, MeshLambertMaterial, Object3D, Raycaster, Scene, Vector2, WebGLRenderer } from 'three';
import { createCamera } from '../components';
import { createDirectionalLight } from '../lights';
import { createGround } from '../objects/ground';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { InfiniteGridHelper } from '../helpers';
import { VoxelBlock } from './voxel-shape';

const HOVER_BLOCK_MATERIAL = new MeshLambertMaterial({
  color: 0xe96823,
});

export class VoxelBuilder {
  private readonly scene = new Scene();
  private readonly renderer = new WebGLRenderer({ antialias: true });
  private readonly camera = createCamera(this.container.offsetWidth / this.container.offsetHeight);
  private readonly controls = new OrbitControls(this.camera, this.container);
  private readonly raycaster = new Raycaster();
  private readonly pointer = new Vector2();
  private readonly groundObj = createGround();

  private readonly blocks: Object3D[] = [];

  constructor(private readonly container: HTMLElement) {
    this.container.appendChild(this.renderer.domElement);

    const background = new Color().setHSL(0.6, 0, 1);
    const fog = new Fog(background, 1, 5000);

    const { light: directionalLight, lightHelper: directionalLightHelper } = createDirectionalLight();

    this.scene.add(directionalLight, directionalLightHelper);
    this.controls.addEventListener('change', this.render.bind(this));

    this.scene.background = background;
    this.scene.fog = fog;

    const infiniteGrid = new InfiniteGridHelper(1, 10);
    this.scene.add(infiniteGrid);
    this.scene.add(createGround());

    this.renderer.shadowMap.enabled = true;
    this.renderer.setSize(this.container.offsetWidth, this.container.offsetHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    const blockMesh = new VoxelBlock(
      new Vector2(0, 0),
      new Vector2(2, 0),
      new Vector2(2, 3),
      new Vector2(0, 3),
      new Vector2(0, 2),
      new Vector2(1, 2),
      new Vector2(1, 1),
      new Vector2(0, 1)
    );

    blockMesh.position.set(0.5, 0.5, 0.5);

    this.blocks.push(blockMesh);
    this.scene.add(blockMesh);

    this.container.onpointermove = this.onPointerMove.bind(this);

    this.render();
  }

  private render(): void {
    this.raycaster.setFromCamera(this.pointer, this.camera);
    this.renderer.render(this.scene, this.camera);
  }

  private onPointerMove(event: MouseEvent): void {
    this.pointer.set((event.clientX / this.container.offsetWidth) * 2 - 1, -(event.clientY / this.container.offsetHeight) * 2 + 1);

    this.raycaster.setFromCamera(this.pointer, this.camera);

    const intersects = this.raycaster.intersectObjects(this.blocks);

    if (intersects && intersects.length > 0) {
      for (let i = 0; i < intersects.length; i++) {
        intersects[i].object.material.color.set(0xff0000);
      }

      this.render();
    }
  }
}
