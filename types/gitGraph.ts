type Node = {
  x: number;
  y: number;
  color?: string;
  fillColor?: string;
  stroke?: number;
};
type Nodes = Record<string, Node>;
type Edge = {
  color?: string;
  nodes: [string, string];
  type?:
    | 'curvedRight'
    | 'curvedLeft'
    | 'sCurvedRight'
    | 'sCurvedLeft'
    | 'straight';
  stroke?: number;
  amplitude?: number
};
type Edges = Record<string, Edge>;

export { Node, Nodes, Edge, Edges };
