import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    
} from "shards-react";

const VerPaciente=({paciente})=>(
  <div>
    <Card small className='mb-4 pt-3'>
      <h2>Paciente Individual:</h2>
        <CardHeader className="border-bottom text-center">
        <h3  className="mb-0">Rut:</h3>
        <p className="mb-0">{paciente.rut}</p>
        <h3  className="mb-0">Nombre:</h3>
        <p className="mb-0">{paciente.nombre}</p>
        <h3  className="mb-0">Notas:</h3>
        <p>{paciente.notas}</p>
        </CardHeader>
    </Card>
  </div>
)
VerPaciente.propTypes = {
    /**
     * The user details object.
     */
    paciente: PropTypes.object
  };

  VerPaciente.defaultProps = {
    paciente: {
      rut: "XX.XXX.XXX-X",
      nombre: "Tulio Triviño",
      notas: "Le tiene miedo a las Ballenas" 
    }
  };
  
  export default VerPaciente;