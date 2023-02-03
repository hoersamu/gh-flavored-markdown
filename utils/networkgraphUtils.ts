import { Nodes, Edges, Paths, Layouts } from 'v-network-graph';

/**
 * Creates edges between nodes in the graph.
 *
 * @param nodes List of nodes in the graph.
 * @param circle Link the last node to the first node.
 * @returns List of edges for the graph.
 */
const autoLinkNodes = (nodes: Nodes, circle = false): Edges => {
  const nodeKeys = Object.keys(nodes).filter(
    (key) => !key.startsWith('placementNode')
  );
  const edges: Edges = {};

  for (let i = 1; i < nodeKeys.length; i++) {
    edges[`edge${i}`] = {
      source: nodeKeys[i - 1],
      target: nodeKeys[i],
    };
  }

  if (circle) {
    edges[`edge${nodeKeys.length}`] = {
      source: nodeKeys[nodeKeys.length - 1],
      target: nodeKeys[0],
    };
  }

  return edges;
};

/**
 * Creates a path for every edge in the graph.
 *
 * @param edges List of edges in the graph.
 * @returns Paths object for the graph.
 */
const pathsFromEdges = (edges: Edges, skip?: string[]): Paths =>
  Object.keys(edges).reduce((acc, key, index) => {
    if (skip?.includes(key)) return acc;
    return { ...acc, [`path${index}`]: { edges: [key] } };
  }, {});

/**
 * Invisible node to prevent the graph from being centered on the first node.
 *
 * @param nodes
 * @returns
 */
const nodesWithPlacementNode = (nodes: Nodes): Nodes => ({
  placementNode: { name: 'invisible' },
  placementNode2: { name: 'invisible' },
  placementNode3: { name: 'invisible' },
  placementNode4: { name: 'invisible' },
  ...nodes,
});

/**
 * Centers the graph on the invisible node.
 *
 * @param nodes
 * @returns
 */
const layoutWithPlacementNode = (
  layouts: Layouts,
  width: number,
  height: number
): Layouts => ({
  ...layouts,
  nodes: {
    placementNode: { x: -width / 2, y: -height / 2 },
    placementNode2: { x: -width / 2, y: height / 2 },
    placementNode3: { x: width / 2, y: -height / 2 },
    placementNode4: { x: width / 2, y: height / 2 },
    ...layouts.nodes,
  },
});

const defautltXFromWindowWidth = (windowWidth: number): number =>
  -windowWidth / 2.4;

export {
  autoLinkNodes,
  pathsFromEdges,
  nodesWithPlacementNode,
  layoutWithPlacementNode,
  defautltXFromWindowWidth,
};
