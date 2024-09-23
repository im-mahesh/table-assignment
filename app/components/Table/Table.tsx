import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useCallback,
} from "react";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";
import TableActions from "./TableActions";
import styles from "./Table.module.css";
import { TableProps } from "./TableProps";

const Table: React.FC<TableProps> = ({ data, columns }) => {
  const [checks, setChecks] = useState<
    { name: string; isAvailable: boolean }[]
  >([]);
  const [isAllChecks, setIsAllChecks] = useState<boolean>(false);
  const [isDownloadable, setIsDownloadable] = useState<boolean>(false);
  const selectAllRef = useRef<HTMLInputElement>(null);

  const dataNames = useMemo(() => data.map((row) => row.name), [data]);

  useEffect(() => {
    if (selectAllRef.current) {
      if (checks.length === dataNames.length) {
        selectAllRef.current.indeterminate = false;
        selectAllRef.current.checked = true;
      } else if (checks.length > 0) {
        selectAllRef.current.indeterminate = true;
        selectAllRef.current.checked = false;
      } else {
        selectAllRef.current.indeterminate = false;
        selectAllRef.current.checked = false;
      }
    }
    const isDownloadable =
      checks.length > 0 && checks.every((item) => item.isAvailable);
    setIsDownloadable(isDownloadable);
  }, [checks, dataNames.length]);

  const handleCheck = (name: string, isAvailable: boolean) => {
    const existingCheck = checks.find((item) => item.name === name);
    if (existingCheck) {
      setChecks(checks.filter((item) => item.name !== name));
    } else {
      setChecks([...checks, { name, isAvailable }]);
    }
  };

  const handleAllCheck = useCallback(() => {
    if (isAllChecks) {
      setChecks([]);
    } else {
      setChecks(
        data.map((row) => ({
          name: row.name,
          isAvailable: row.status === "available",
        }))
      );
    }
    setIsAllChecks(!isAllChecks);
  }, [data, isAllChecks]);

  const handleDownload = () => {
    const selectedData = data.filter((row) =>
      checks.some((check) => check.name === row.name)
    );
    const alertMessage = selectedData
      .map((row) => `Path: ${row.path}, Device: ${row.device}`)
      .join("\n");
    alert(alertMessage);
  };

  return (
    <>
      <TableActions
        checksLength={checks.length}
        isDownloadable={isDownloadable}
        handleDownload={handleDownload}
        isAllChecks={isAllChecks}
        selectAllRef={selectAllRef}
        handleAllCheck={handleAllCheck}
      />
      <table className={styles.table}>
        <TableHeader columns={columns} />
        <tbody>
          {data.map((row, rowIndex) => {
            const isChecked = checks.some((item) => item.name === row.name);
            return (
              <TableRows
                key={rowIndex}
                row={row}
                columns={columns}
                isChecked={isChecked}
                handleCheck={handleCheck}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
