import React from "react";
import { TableHeaderProps } from "./TableProps";

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <thead>
      <tr>
        <th></th>
        {columns.map((column) => (
          <th key={column.accessor} scope="col">
            {column.header}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
