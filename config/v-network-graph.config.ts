import { SimpleLayout, UserConfigs } from 'v-network-graph';

export const VNetworkGraphConfig: UserConfigs = {
  view: {
    panEnabled: false,
    zoomEnabled: false,
    doubleClickZoomEnabled: false,
    mouseWheelZoomEnabled: false,
    boxSelectionEnabled: false,
    autoPanAndZoomOnLoad: false,
    autoPanOnResize: false,
  },
  node: {
    draggable: false,
    selectable: false,
    normal: {
      strokeColor: node=>node.name==='invisible'?'#00000000':'#58a6ff',
      strokeWidth: 8,
      color: '#00000000',
    },
  },
  edge: {
    normal: {
      color: '#00000000',
    },
    hover: {
      color: '#00000000',
    },
    gap: 75,
    type: 'curve',
  },
  path: {
    end: 'edgeOfNode',
    zOrder: {
      zIndex: 0,
    },
    normal: {
      width: 8,
      color: '#58a6ff',

    },
    visible: true,
  },
};
