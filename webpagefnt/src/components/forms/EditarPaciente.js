import React, {useState} from "react";
import PropTypes from "prop-types"; 
import {Link} from "react-router-dom"
import * as validador from "./validador/rut.js";

import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  Button,
} from "shards-react";



const EditarPaciente=({paciente})=({
    onSubmit
})=>{
    const[id]=useState(paciente.id);
    const[rut,setRut]=useState(paciente.rut);
    const[nombre,setNombre]=useState(paciente.nombre);
    const[notas,setNotas]=useState(paciente.notas);

    return(
        <Row>
            {/*Editor*/}
            <Col lg="9" md="12">
                <Card small className="mb-3">
                    <CardBody>
                        <Form className="add-new-paciente">
                        <FormGroup>
                                <label>Rut</label>
                                <FormInput
                                    value={id}                                    
                                    size="lg"
                                    className="mb-3"
                                    placeholder="00" />
                            </FormGroup>
                            <FormGroup>
                                <label>Rut</label>
                                <FormInput
                                    value={rut}
                                    onChange={(event) => setRut(validador.checkRut(event.target.value))}
                                    onInput={(event)=>setRut(validador.checkRut(event.target.value))}
                                    size="lg"
                                    className="mb-3"
                                    placeholder="XXXXXXXX-X" />
                            </FormGroup>
                            <FormGroup>
                                <label>Nombre</label>
                                <FormInput
                                    value={nombre}
                                    onChange={(event) => setNombre(event.target.value)}
                                    size="lg"
                                    className="mb-3"
                                    placeholder="Tulio Triviño" />
                            </FormGroup>
                            <FormGroup>
                                <label>Notas</label>
                                <FormInput
                                    value={notas}
                                    onChange={(event) => setNotas(event.target.value)}
                                    size="lg"
                                    className="mb-3"
                                    placeholder="Le tiene miedo a las ballenas" />
                            </FormGroup>
                        </Form>
                        <Link to="/pacientes">
                        <Button 
                            theme="primary"
                            className="mb-2 mr-1"
                            onClick={(event)=>onSubmit({'rut':rut,'nombre':nombre,'notas':notas})}
                            >Editar</Button>
                        </Link>
                    </CardBody>

                </Card>
            </Col>
        </Row>
    )
}

EditarPaciente.propTypes={
    onSubmit: PropTypes.func,
}
EditarPaciente.defaultProps={
    onSubmit:()=>{},
}
export default Paciente;