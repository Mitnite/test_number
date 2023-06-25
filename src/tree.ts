export class Tree {
  constructor(public data: DataItem[]) {}

  straighten(): TreeItem[] {
    const out: TreeItem[] = [];

    // your code

    return out;
  }
}

export interface DataItem {
  id: number;
  parentId: number | null;
  name: string;
  children: DataItem[];
}

interface TreeItem {
  id: number;
  parentId: number | null;
  name: string;
}
