import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    
} from "shards-react";

const VerPaciente=({paciente})=>(
    <Card small className='mb-4 pt-3'>
        <CardHeader className="border-bottom text-center">
        <h4 className="mb-0">{paciente.rut}</h4>
        <h4 className="mb-0">{paciente.nombre}</h4>
        <h3  className="mb-0">Notas</h3>
        <p>{paciente.notas}</p>
        </CardHeader>
    </Card>
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