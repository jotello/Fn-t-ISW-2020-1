import React,{useState} from "react";
import PropTypes from "prop-types";
import{
    Row,
    Col,
    Card,
    CardBody,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    Button,
} from "shards-react";
import * as validador from "./validador/rut.js";

const Solicitud=({
    onSubmit
})=>{
    const[rut,setRut]=useState('');
    const[equipo,setEquipo]=useState('');
    const[equipamiento,setEquipamiento]=useState('');
    const[sillon,setSillon]=useState('');
    const[salaRec,setSalaRec]=useState('');
    const[pabellon,setPabellon]=useState('');
    const[horaInicio,setHoraInicio]=useState('');
    const[horaTermino,setHoraTermino]=useState('');
    const[descripcion,setDescripcion]=useState('');

    return(
        <Row>
            {/* Editor */}
            <Col lg="9" md="12">
                <Card small className="mb-3">
                    <CardBody>
                        <Form className="add-new-solicitud">
                            <FormGroup>
                                <label>Rut Paciente</label>
                                <FormInput
                                    value={rut}
                                    onChange={(event)=> setRut(validador.checkRut(event.target.value))}
                                    size="lg"
                                    className="mb-3"
                                    placeholder="XXXXXXXX-X" />                                                          

                            </FormGroup>
                            <FormGroup>
                                <FormInput 
                                    value={equipo}
                                    onChange={()=>{}}
                                
                                />
                                <FormSelect>
                                    <option>Choose ...</option>
                                    <option>...</option>
                                </FormSelect>


                            </FormGroup>
                            <FormGroup>
                                <FormInput 
                                    value={equipamiento}
                                    onChange={()=>{}}
                                
                                />
                                <FormSelect>
                                    <option>Choose ...</option>
                                    <option>...</option>
                                </FormSelect>
                            </FormGroup>
                            <FormGroup>
                                <FormInput 
                                    value={sillon}
                                    onChange={()=>{}}
                                
                                />
                                <FormSelect>
                                    <option>Choose ...</option>
                                    <option>...</option>
                                </FormSelect>
                            </FormGroup>
                            <FormGroup>
                                <FormInput 
                                    value={pabellon}
                                    onChange={()=>{}}
                                
                                />
                                <FormSelect>
                                    <option>Choose ...</option>
                                    <option>...</option>
                                </FormSelect>
                            </FormGroup>

                        </Form>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    )





}
Solicitud.propTypes={
    onSubmit: PropTypes.func,
}
Solicitud.defaultProps={
    onSubmit:()=>{},
}
export default Solicitud;