import {puntosPorGanar, puntosPorEmpatar, puntosPorDisputar  } from '../constants/points'

export function SortTable(table)
{
  const mapped = table?.map((item) => (
    {
     ...item,
     diferenciaDeGol: item.golesAFavor-item.golesEnContra,
     puntos: item.partidosGanados * puntosPorGanar + item.partidosEmpatados * puntosPorEmpatar + (item.partidosGanados + item.partidosPerdidos + item.partidosEmpatados) * puntosPorDisputar
    }
   )) 
    table = mapped.sort((a,b)=> (b.puntos - a.puntos || b.diferenciaDeGol - a.diferenciaDeGol ));
    return table;
  }