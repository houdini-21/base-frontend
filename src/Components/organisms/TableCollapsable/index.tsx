/* eslint-disable react/prop-types */
import {
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  flexRender,
} from "@tanstack/react-table";
import type { ColumnDef } from "@tanstack/react-table";

interface TableData {
  [key: string]: string | number | boolean | TableData[] | undefined;
  subItems?: TableData[];
}

interface Props {
  data: TableData[];
  columns: ColumnDef<TableData>[];
}

export const TableCollapsable: React.FC<Props> = ({
  data,
  columns,
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    getSubRows: (row) => row.subItems,
  });

  return (
    <div className="p-6 bg-white w-full">
      <div className="overflow-x-auto">
        {/* Header */}
        <div
          className="text-black text-sm font-semibold grid p-4 border-b border-gray-200"
          style={{
            gridTemplateColumns: `60px repeat(${
              table.getVisibleFlatColumns().length - 1
            }, 1fr)`,
          }}
        >
          {table.getHeaderGroups().map((headerGroup) =>
            headerGroup.headers.map((header) => (
              <div key={header.id} className="truncate border-gray-200">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </div>
            ))
          )}
        </div>

        {/* Body */}
        {table.getRowModel().rows.map((row) => (
          <div
            key={row.id}
            className={`grid px-4 py-3 items-center text-sm shadow-sm border-b border-gray-200 ${
              row.depth > 0 ? "bg-gray-50" : "bg-white"
            }`}
            style={{
              gridTemplateColumns: `${
                row.depth > 0 ? "100px" : "60px"
              } repeat(${row.getVisibleCells().length - 1}, 1fr)`,
            }}
          >
            {row.getVisibleCells().map((cell, index) => {
              const isFirstCell = index === 0;
              return (
                <div
                  key={cell.id}
                  className="whitespace-nowrap truncate text-gray-800"
                >
                  <div
                    style={
                      isFirstCell ? { paddingLeft: `${row.depth * 20}px` } : {}
                    }
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
