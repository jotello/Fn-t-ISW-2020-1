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



const EditarPaciente=({
    paciente,
    onSubmit,
 })=>{
    //console.log(paciente);
    
    const[rut,setRut]=useState(paciente.rut);
    const[nombre,setNombre]=useState(paciente.nombre);
    const[notas,setNotas]=useState(paciente.notas);
    
    //setNotas(paciente.notas);
    function verificar(paciente,nombre,rut,notas){
        var name=nombre;
        var run=rut;
        var notes=notas;
        if(nombre===''){
            name=paciente.nombre
        }
        if(rut===''){
            run=paciente.rut
        }
        if(notas===''){
            notes=paciente.notas
        }
        return {'id':paciente.id,'nombre':name,'rut':run,'notas':notes}

    }
    return(
        <Row>
            {/*Editor*/}
            <Col lg="9" md="12">
                <Card small className="mb-3">
                    <CardBody>
                        <Form className="add-new-paciente">
                        <FormGroup>
                                <label>Id</label>
                                <FormInput
                                    value={paciente.id}    
                                                               
                                    size="lg"
                                    className="mb-3"
                                    readOnly
                                    placeholder={paciente.id}  />
                            </FormGroup>
                            <FormGroup>
                                <label>Rut</label>
                                <FormInput
                                    value={rut}
                                    onChange={(event) => setRut(validador.checkRut(event.target.value))}
                                    onInput={(event)=>setRut(validador.checkRut(event.target.value))}
                                    size="lg"
                                    className="mb-3"
                                    placeholder={paciente.rut} />
                            </FormGroup>
                            <FormGroup>
                                <label>Nombre</label>
                                <FormInput
                                    value={nombre}
                                    onChange={(event) => setNombre(event.target.value)}
                                    size="lg"
                                    className="mb-3"
                                    placeholder={paciente.nombre} />
                            </FormGroup>
                            <FormGroup>
                                <label>Notas</label>
                                <FormInput
                                    value={notas}
                                    onChange={(event) => setNotas(event.target.value)}
                                    size="lg"
                                    className="mb-3"
                                    placeholder={paciente.notas} />
                            </FormGroup>
                        </Form>
                        <Link to="/pacientes">
                        <Button 
                            theme="primary"
                            className="mb-2 mr-1"
                            onClick={(event) => onSubmit(verificar(paciente,nombre,rut,notas))}
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
export default EditarPaciente;