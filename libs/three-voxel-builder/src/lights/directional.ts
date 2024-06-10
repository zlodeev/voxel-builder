import { DirectionalLight, DirectionalLightHelper } from "three";

export function createDirectionalLight(): {light: DirectionalLight, lightHelper: DirectionalLightHelper} {
  const light = new DirectionalLight(0xffffff);
  const lightHelper = new DirectionalLightHelper(light, 10);

  light.color.setHSL( 0.1, 1, 0.95 );
  light.position.set( -1, 1.75, 1);
  light.position.multiplyScalar( 30 );

  light.castShadow = true;

  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;

  const depth = 5;

  light.shadow.camera.top = depth;
  light.shadow.camera.right = depth;
  light.shadow.camera.bottom = -depth;
  light.shadow.camera.left = -depth;

  light.shadow.camera.far = 3500;
  light.shadow.bias = -0.0001;

  return {light, lightHelper};
}
