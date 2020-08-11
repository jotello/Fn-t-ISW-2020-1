import React,{useState} from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
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
    FormTextarea,
} from "shards-react";
import pacienteService from "../../services/paciente.service"

const Solicitud=({
    onSubmit
})=>{
    const[paciente,setPaciente]=useState('');
    const[equipo,setEquipo]=useState('');
    const[equipamiento,setEquipamiento]=useState('');
    const[sillon,setSillon]=useState('');
    const[salaRec,setSalaRec]=useState('');
    const[pabellon,setPabellon]=useState('');
    const[bloques,setBloques]=useState('');
    const[descripcion,setDescripcion]=useState('');

    const[lPacientes,setLPacientes]=useState('');
    pacienteService.getAll()
        .then((response) => {
            setLPacientes(response.data)
            console.log(response)
        })
        .catch((error) => console.log(error));

    return(

        <Row>
            {/* Editor */}
            <Col lg="9" md="12">
                <Card small className="mb-3">
                    <CardBody>
                        <Form className="add-new-solicitud">
                            <FormGroup>
                                <label>Paciente</label>
                                
                                    {
                                        lPacientes.length === 0 ?
                                        <FormSelect>
                                        <option value={null}>No hay pacientes</option>
                                        </FormSelect> :
                                        <Select 
                                        onChange={event => setPaciente(event.value)}
                                        options={
                                            lPacientes.slice().map((pac, index) => ({
                                                value: pac.id,
                                                label: pac.rut+" / "+pac.nombre
                                            }))
                                        }/>
                                    }
                                
                            </FormGroup>
                            <FormGroup>
                                <label>Información adicional</label>
                                <FormTextarea 
                                onChange={(event) => setDescripcion(event.target.value)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label></label>
                            </FormGroup>
                        </Form>
                        <Link to="/solicitudes">
                        <Button 
                            theme="primary"
                            className="mb-2 mr-1"
                            onClick={(event)=>onSubmit(
                                {
                                    "paciente": paciente,
                                    "descripcion": descripcion
                                })}
                            >Agregar</Button>
                        </Link>
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