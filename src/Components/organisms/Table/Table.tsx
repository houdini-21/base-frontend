import { DataGrid } from "react-data-grid";
import PulseLoader from "react-spinners/PulseLoader"; // Importar el spinner
import "./index.css";
import "react-data-grid/lib/styles.css";
import type { ITableProps } from "./Table.types";

const Table = ({
  rows,
  columns,
  rowHeight = 45,
  styleClasses = "",
  headerRowHeight = 45,
  loading,
}: ITableProps) => {
  return (
    <div className="relative">
      {" "}
      {/* Contenedor relativo para overlay */}
      {/* Tabla */}
      <DataGrid
        className={`rdg-light ${styleClasses}`}
        columns={columns}
        rows={rows}
        rowHeight={rowHeight}
        headerRowHeight={headerRowHeight}
        style={{ minHeight: "500px" }}
      />
      {/* Overlay de carga con fondo RGBA */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(255, 255, 255,0.3)] backdrop-blur-sm">
          <PulseLoader color="#2563eb" size={12} /> {/* Spinner blanco */}
        </div>
      )}
    </div>
  );
};

export default Table;
