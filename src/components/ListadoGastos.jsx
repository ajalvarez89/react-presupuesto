import React from 'react';
import Gasto from './Gasto'


const ListadoGastos = ({gastos}) => (
  <>
    <h2>Gastos diarios</h2>
    {gastos.map(gasto => (
      <Gasto
        key={gasto.id}
        gasto={gasto}
      />
    ))}
  </>
)

export default ListadoGastos;
