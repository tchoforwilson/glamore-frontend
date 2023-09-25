import React, { useContext } from "react";
import { TableContext } from "../../contexts";

/**
 * @breif Render a table head with columns values
 * @returns {thead}
 */
const TableHead = () => {
  const { columns } = useContext(TableContext);
  return (
    <thead className="table-head">
      <tr className="table-head__row">
        {columns.map((column) => (
          <th className="table-head__item" key={column.path || column.key}>
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
