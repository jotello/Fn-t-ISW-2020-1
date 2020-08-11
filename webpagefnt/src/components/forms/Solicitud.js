import React,{useState} from "react";
import Select from "react-select";
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
import pacienteService from "../../services/paciente.service"

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
                                        <Select options={
                                            lPacientes.slice().map((pac, index) => ({
                                                value: pac,
                                                label: pac.rut+" / "+pac.nombre
                                            }))
                                        }/>
                                    }
                                
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