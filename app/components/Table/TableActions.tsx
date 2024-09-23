import React from "react";
import { IoMdDownload } from "react-icons/io";
import styles from "./Table.module.css";
import { TableActionsProps } from "./TableProps";

const TableActions: React.FC<TableActionsProps> = ({
  checksLength,
  isDownloadable,
  handleDownload,
  isAllChecks,
  selectAllRef,
  handleAllCheck,
}) => {
  return (
    <div className={styles.headers}>
      <input
        type="checkbox"
        checked={isAllChecks}
        ref={selectAllRef}
        onChange={handleAllCheck}
      />
      <span className={styles.selected}>
        {checksLength ? `Selected ${checksLength}` : "None Selected"}
      </span>
      {isDownloadable ? (
        <span className={styles.downloadselected} onClick={handleDownload}>
          <IoMdDownload /> Download Selected
        </span>
      ) : null}
    </div>
  );
};

export default TableActions;
