export interface INode {
  path: string;
  rootPath: string;
  type: string;
  isRoot: boolean;
  children?: string[];
  isOpen: boolean;
  isSaved: boolean;
  content?: string;
  order?: number;
}
