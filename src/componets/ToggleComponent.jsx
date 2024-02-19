import { useState } from "react";

function ActivoInactivo() {
  // Usamos useState para establecer el estado inicial a "activo"
  const [estado, setEstado] = useState("activo");

  // Función para cambiar el estado entre "activo" e "inactivo"
  const alternarEstado = () => {
    // Si el estado actual es "activo", cambiamos a "inactivo"; de lo contrario, cambiamos a "activo"
    /*if (estado === "activo") {
      setEstado("inactivo");
    } else {
      setEstado("activo");
    }*/

    /**
     * Creando una funcion para cambiar el estado
     */
    /*
    const alternarEstado = () => {
        // Usar el operador ternario para cambiar entre "activo" e "inactivo"
        const nuevoEstado = estado === 'activo' ? 'inactivo' : 'activo';
        setEstado(nuevoEstado);
    };


    /**
     * Otra forma usando un toogle
     */
    //setEstado(!estado);

    /**
     * Otra forma
     */
    //Creando una función toggle personalizada
    const toggle = (estadoActual) =>
      estadoActual === "activo" ? "inactivo" : "activo";
    // Llamar a la función toggle para cambiar el estado
    setEstado(toggle(estado));
  };

  return (
    <div>
      <p>El estado actual es: {estado}</p>
      <button onClick={alternarEstado}>Alternar Estado</button>
    </div>
  );
}

export default ActivoInactivo;
