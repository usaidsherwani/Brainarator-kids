import { AUTHOR_FILE_EXPLORER, NODE_TYPE, TABS } from 'client/definitions/fileExplorer';
import { INode } from 'client/interfaces';

export const showFileOnExplorer = async (data: Array<INode>, selectedPath: string, isCopiedFromMarkDown: boolean) => {
  const updatedData = data?.map((fileNode: INode) => {
    if (
      selectedPath &&
      isCopiedFromMarkDown &&
      fileNode?.type === NODE_TYPE.FOLDER &&
      fileNode?.children &&
      fileNode?.children.includes(selectedPath)
    )
      return { ...fileNode, isOpen: true };
    if (selectedPath && isCopiedFromMarkDown && fileNode?.rootPath === selectedPath)
      return { ...fileNode, isOpen: true };
    return { ...fileNode };
  });
  return updatedData;
};

export const addFileInExplorer = (stepName: string, stepContent: any, stepOrder?: number, basePath?: any) => {
  let stepData = {
    path: `${stepName}`,
    rootPath: basePath ? `${basePath}${stepName}` : `${AUTHOR_FILE_EXPLORER.BASE_PATH}${stepName}`,
    type: 'file',
    isRoot: false,
    content: `${stepContent}`,
    isOpen: !!basePath,
    isSaved: true,
    isShow: true,
    order: `${stepOrder}`,
  };
  return stepData;
};

export const isFileSaved = (treeNodes: INode[]) => {
  console.log('forsavedfile', treeNodes);
  let isSaved = true;
  treeNodes.map((node: INode) => {
    if (node.isSaved === false) {
      isSaved = false;
    }
  });
  return isSaved;
};

export const getTabList = (Array: any) => {
  return Array.from(document.getElementsByClassName(TABS.REACT_TABS));
}