import { EventBus } from '@grafana/data';
import { RefreshEvent } from '@grafana/runtime';
import { sceneGraph, SceneObject, SceneObjectState } from '@grafana/scenes';
import { useEffect, useState } from 'react';

import { AnnotationDataLayer, AnnotationLayer } from '@/types';

/**
 * useAnnotations hook
 * retrieve annotations in scene dashboards
 */
const getAnnotationLayers = (): AnnotationLayer[] => {
  try {
    const sceneModel = window.__grafanaSceneContext as SceneObject<SceneObjectState>;
    if (!sceneModel) return [];
    const layers = sceneGraph.getDataLayers(sceneModel) as unknown as AnnotationDataLayer[] | undefined;
    if (!layers || layers.length === 0) return [];
    return layers.flatMap((layer) => layer?.state?.annotationLayers ?? []);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return [];
  }
};

export const useAnnotations = ({ eventBus }: { eventBus?: EventBus }) => {
  const [annotationsLayers, setAnnotationsLayers] = useState<AnnotationLayer[]>(getAnnotationLayers);

  /**
   * Reload annotations on dashboard refresh events
   */
  useEffect(() => {
    const subscriber = eventBus?.getStream(RefreshEvent).subscribe(() => {
      setAnnotationsLayers(getAnnotationLayers());
    });

    return () => {
      subscriber?.unsubscribe();
    };
  }, [eventBus]);

  return annotationsLayers;
};
