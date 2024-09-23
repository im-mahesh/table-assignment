"use client";

import Table from "./components/Table/Table";
import { columns, data } from "./components/Table/TableConstants";

export default function Home() {
  return <Table data={data} columns={columns} />;
}
