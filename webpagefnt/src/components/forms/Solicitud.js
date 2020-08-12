import React,{useState} from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import DayPickerInput from "react-day-picker/DayPickerInput"
import "react-day-picker/lib/style.css"
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
import pacienteService from "../../services/paciente.service";
import equipoService from "../../services/equipo.service";

const Solicitud=({
    onSubmit
})=>{
    const[paciente,setPaciente]=useState('');
    const[equipo,setEquipo]=useState('');
    const[equipamiento,setEquipamiento]=useState('');
    const[sillon,setSillon]=useState('');
    const[salaRec,setSalaRec]=useState('');
    const[pabellon,setPabellon]=useState('');
    const[date,setDate]=useState();
    const[hora,setHora]=useState('');
    const[bloques,setBloques]=useState('');
    const[descripcion,setDescripcion]=useState('');

    const[lPacientes,setLPacientes]=useState('');
    const[lEquipos, setLEquipos]=useState('');
    const bloq = new Array(18).fill(0);
    pacienteService.getAll()
        .then((response) => {
            setLPacientes(response.data)
            console.log(response)
        })
        .catch((error) => console.log(error));
    equipoService.getAll()
        .then((response) => {
            setLEquipos(response.data)
            console.log(response)
        })
        .catch((error) => console.log(error));
    return(

        <Row>
        <Card>
            {}
        </Card>
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
                                <label>Fecha</label>
                                <div>
                                <DayPickerInput onDayChange={(day) => setDate(
                                    day.getDay()+"-"
                                    +day.getMonth()+"-"
                                    +day.getFullYear())}/>
                                </div>
                            </FormGroup>
                            <FormGroup>
                                <label>Bloques</label>
                                <Select isMulti
                                        onChange={event => setBloques(event.map(
                                            (op) => {
                                                return op.value
                                            }
                                        ))}
                                        options={
                                            bloq.map((val, index) => ({
                                                value: index+1,
                                                label: "Bloque "+(index+1)
                                            }))
                                        }/>
                            </FormGroup>
                            <FormGroup>
                                <label>Seleccionar Equipo</label>
                                    {
                                        lEquipos.length === 0 ?
                                        <FormSelect>
                                        <option value={null}>No hay equipos</option>
                                        </FormSelect> :
                                        <Select 
                                        onChange={event => setEquipo(event.value)}
                                        options={
                                            lEquipos.slice().map((eq, index) => ({
                                                value: eq,
                                                label: eq.id+" / "+eq.tag
                                            }))
                                        }/>
                                    }
                            </FormGroup>
                            <FormGroup>
                                <label>Información adicional</label>
                                <FormTextarea
                                lang="es" 
                                onChange={(event) => setDescripcion(event.target.value)}
                                />
                            </FormGroup>
                        </Form>
                        <Link to="/solicitudes">
                        <Button 
                            theme="primary"
                            className="mb-2 mr-1"
                            onClick={(event)=>onSubmit(
                                {
                                    "paciente": paciente,
                                    "descripcion": descripcion,
                                    "bloques": bloques.map((b) => {return (date+" / "+b)}),
                                    "idEquipo": equipo.id,
                                    "tipoEqipo": equipo.tag,
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