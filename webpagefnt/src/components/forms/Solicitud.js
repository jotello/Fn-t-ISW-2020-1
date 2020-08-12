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
    FormSelect,
    Button,
    FormTextarea,
} from "shards-react";
import pacienteService from "../../services/paciente.service";
import equipoService from "../../services/equipo.service";
import equipamientoService from "../../services/equipamiento.service";
import sillonService from "../../services/sillon.service";

const flags = {
    paciente: true,
    equipo: true,
    equipamiento: true,
    sillon: true,

}


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
    const[bloques,setBloques]=useState('');
    const[descripcion,setDescripcion]=useState('');

    const[lPacientes,setLPacientes]=useState('');
    const[lEquipos, setLEquipos]=useState('');
    const[lEquipamientos, setLEquipamientos]=useState('');
    const[lSillones, setLSillones]=useState('');

    const bloq = new Array(18).fill(0);
    if (flags["paciente"]) pacienteService.getAll()
        .then((response) => {
            setLPacientes(response.data)
        
        }).then(flags["paciente"] = false)
        .catch((error) => console.log(error));
    if (flags["equipo"]) equipoService.getAll()
        .then((response) => {
            setLEquipos(response.data)
        
        }).then(flags["equipo"] = false)
        .catch((error) => console.log(error));
    if (flags["equipamiento"]) equipamientoService.getAll()
        .then((response) => {
            setLEquipamientos(response.data)
        
        }).then(flags["equipamiento"] = false)
        .catch((error) => console.log(error));
    if (flags["sillon"]) sillonService.getAll()
        .then((response) => {
            setLSillones(response.data)
        
            console.log(response)
        }).then(flags["sillon"] = false)
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
                                                return (date+" / "+op.value)
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
                                <label>Elija el equipamiento</label>
                                {
                                        lEquipamientos.length === 0 ?
                                        <FormSelect>
                                        <option value={null}>No hay equipamiento</option>
                                        </FormSelect> :
                                <Select isMulti
                                        onChange={event => setEquipamiento(event.map(
                                            (op) => {
                                                return op.value
                                            }
                                        ))}
                                        options={
                                            lEquipamientos.slice().map((equi, index) => ({
                                                value: equi,
                                                label: equi.name
                                            }))
                                        }/>
                                }
                            </FormGroup>
                            <FormGroup>
                                <label>Seleccionar Sala de quimio</label>
                                    {
                                        lSillones.length === 0 ?
                                        <FormSelect>
                                        <option value={null}>No hay salas</option>
                                        </FormSelect> :
                                        <Select 
                                        onChange={event => setSillon(event.value)}
                                        options={
                                            lSillones.slice().map((si, index) => ({
                                                value: si,
                                                label: "Piso "+si.piso+"/"+si.id
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
                            onClick={(event)=>{
                                let idEquipamiento = equipamiento === null ? 0:
                                equipamiento.slice().map((e) => {return e.id});
                                let tipoEquipamento = equipamiento === null ? null:
                                equipamiento.slice().map((e) => {return e.name}).join("||");
                                let idEquipo = equipo === null ? 0 : equipo.id;
                                let tipoEquipo = equipo === null ? null : equipo.tag;
                                let idSillon = sillon === null ? 0 : sillon.id;
                                let tipoSillon = sillon === null ? null : "Piso "+sillon.piso+"/"+sillon.id;
                                
                                onSubmit(
                                {
                                    "paciente": paciente,
                                    "descripcion": descripcion,
                                    "bloques": bloques,
                                    "idEquipo": idEquipo,
                                    "tipoEqipo": tipoEquipo,    
                                    "idEquipamiento": idEquipamiento,
                                    "tipoEquipamento": tipoEquipamento,
                                    "sillon": idSillon,
                                    "tipoSillon": tipoSillon,

                                })}}
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