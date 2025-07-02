import { useEffect } from "react";
import { columnHeaders, rowData } from "../data/mockData";

const Spreadsheet = () => {
  useEffect(() => {
    console.log("Spreadsheet loaded:", {
      headers: columnHeaders,
      rows: rowData,
    });
  }, []);

  return (
    <div className="overflow-auto border-b border-gray-300">
      <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead className="bg-gray-50 sticky top-0">
          <tr>
            {columnHeaders.map((col) => (
              <th
                key={col}
                className="px-4 py-2 font-medium text-gray-700 border-b"
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((row, rIdx) => (
            <tr
              key={rIdx}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => console.log(`Row ${rIdx + 1} clicked`, row)}
            >
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-4 py-2 border-t">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
