import React, { useContext } from "react";
import _ from "lodash";
import { TableContext } from "../../contexts";

/**
 * @breif Render a table body with
 * @param {Array} data  Array of data to be displayed on table body
 * @param {Array} columns Array of columns of the table data
 * @returns {HTMLElement} tablebody
 */
const TableBody = () => {
  /**
   * @breif Render table cell data
   * @param {Object} item Object to be rendered
   * @param {String} column Object field name as columns
   * @returns {String}
   */
  const renderCell = (item, column) => {
    if (column.content) return column.content(item);
    return _.get(item, column.path);
  };

  /**
   * @breif Create row key
   * @param {Object} item Object to be rendered
   * @param {String} column Object field name as columns
   * @returns {String}
   */
  const createKey = (item, column) => item._id + (column.path || column.key);

  /**
   * @breif Get data from table context
   */
  const { data, columns } = useContext(TableContext);
  return (
    <tbody className="table-body">
      {data.map((item, index) => (
        <tr key={item._id || index + 1} className="table-body__row">
          {columns.map((column) => (
            <td key={createKey(item, column)} className="table-body__column">
              {renderCell(item, column)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
