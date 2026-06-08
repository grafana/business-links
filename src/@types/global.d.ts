import { SceneObject } from '@grafana/scenes';

/**
 * __grafanaSceneContext contains Dashboard Scene Object if scene enabled
 */
declare global {
  interface Window {
     
    __grafanaSceneContext?: SceneObject;
  }
}
