export type TableProps = {
  data: DataRow[];
  columns: Array<{ header: string; accessor: string }>;
};

export type TableActionsProps = {
  checksLength: number;
  isDownloadable: boolean;
  handleDownload: () => void;
  isAllChecks: boolean;
  selectAllRef: React.RefObject<HTMLInputElement>;
  handleAllCheck: () => void;
};

export type TableHeaderProps = {
  columns: Array<{ header: string; accessor: string }>;
};

export type TableRowProps = {
  row: DataRow;
  columns: Array<{ header: string; accessor: string }>;
  isChecked: boolean;
  handleCheck: (name: string, isAvailable: boolean) => void;
};

type DataRow = {
  name: string;
  status: string;
  path: string;
  device: string;
  [key: string]: string;
};
