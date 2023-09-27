import React, { useContext } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { TableContext } from "../../contexts";

/**
 * @brief Render a table
 * @param {Any} otherProps Other properties
 * @returns {HTMLTable}
 */
const Table = ({ ...otherProps }) => {
  const { data, columns } = useContext(TableContext);
  return (
    <table {...otherProps}>
      <TableHead columns={columns} />
      <TableBody data={data} columns={columns} />
    </table>
  );
};

export default Table;
