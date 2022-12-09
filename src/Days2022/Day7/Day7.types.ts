export interface File {
  name: string;
  size: number;
}

export interface Directory {
  [key: string]: Directory;
}

export interface FilesAtEachDirectory {
  [key: string]: File[];
}
