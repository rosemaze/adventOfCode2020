export interface JoltsNode {
  value: number;
  children: JoltsNode[];
}

export interface NodeLevel {
  path: string;
  value: number;
}
