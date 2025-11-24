import Swal from "sweetalert2";
import Papa from 'papaparse';
import { useClienteStore, usePolizaStore, useProspectoStore } from "../hooks";

export const exportarExcel = ( tipo, datos ) => {
    let mensaje = '';
    let nombreArchivo = '';

    switch ( tipo ) {
        case 1:
            mensaje = 'Exportar clientes';
            nombreArchivo = 'clientes.csv';
            break;
        case 2:
            mensaje = 'Exportar prospectos';
            nombreArchivo = 'prospectos.csv';
            break;
        case 3:
            mensaje = 'Exportar pólizas';
            nombreArchivo = 'polizas.csv';
            break;
    
        default:
            break;
    }

    if (!datos || datos.length === 0) {
        Swal.fire( mensaje, 'No hay información a exportar', 'error' );
        return;
    }

    const informacionCSV = Papa.unparse( datos );    
    const blob = new Blob( [ informacionCSV ], { type: 'text/csv;charset=utf-8;', quotes: true } );
    const link = document.createElement( 'a' );
    link.href = URL.createObjectURL( blob );
    link.setAttribute( 'download', nombreArchivo );
    document.body.appendChild( link );
    link.click();
    document.body.removeChild( link );
}

export const obtenerDatosExportar = ( tipo ) => {
    const { clientes, startCargaClientes } = useClienteStore();
    const { prospectos, startCargaProspectos } = useProspectoStore();
    const { polizas, startCargaPolizas } = usePolizaStore();

    let datos = [];

    switch ( tipo ) {
        case 1:
            startCargaClientes();
            datos = clientes;
            break;
        case 2:
            startCargaProspectos();
            datos = prospectos;
            break;
        case 3:
            startCargaPolizas();
            datos = polizas;
            break;
    
        default:
            break;
    }

    exportarExcel( tipo, datos );
}
