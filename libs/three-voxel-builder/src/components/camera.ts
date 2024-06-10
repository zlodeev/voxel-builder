
import {PerspectiveCamera} from "three";

export const createCamera = (aspectRatio: number) => {
    const camera = new PerspectiveCamera(
        75,
        aspectRatio,
        0.1,
        2000
    );
    camera.position.set(5, 5, 15);
    return camera;
};

