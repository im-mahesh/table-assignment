import React from "react";
import styles from "./Table.module.css";
import { TableRowProps } from "./TableProps";

const TableRows: React.FC<TableRowProps> = ({
  row,
  columns,
  isChecked,
  handleCheck,
}) => {
  return (
    <tr className={isChecked ? styles.selectedRow : ""}>
      <td>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => handleCheck(row.name, row.status === "available")}
        />
      </td>
      {columns.map((column) => (
        <td key={column.accessor}>
          {column.accessor === "status" &&
          row[column.accessor] === "available" ? (
            <span className={styles.flex}>
              <span className={styles.greenCircle}></span>
              <span className={styles.textUpperCase}>
                {row[column.accessor]}
              </span>
            </span>
          ) : (
            <span
              className={
                column.accessor === "status" ? styles.textUpperCase : ""
              }
            >
              {row[column.accessor]}
            </span>
          )}
        </td>
      ))}
    </tr>
  );
};

export default TableRows;
