import { HemisphereLight, HemisphereLightHelper } from "three";

export function createSunLight(): {light: HemisphereLight, lightHelper: HemisphereLightHelper} {
  const light = new HemisphereLight( 0xffffff, 0xffffff, 2 );
  const lightHelper = new HemisphereLightHelper( light, 10 );

  light.color.setHSL( 0.6, 1, 0.6 );
  light.groundColor.setHSL( 0.095, 1, 0.75 );
  light.position.set( 0, 50, 0 );

  return {light, lightHelper};
}
