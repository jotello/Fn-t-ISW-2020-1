import React, {useState} from "reac";
import PropTypes from "prop-types"; 
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

const Paciente=({
    onSubmit
})=>{
    const[rut,setRut]=useState('');
    const[nombre,setNombre]=useState('');
    const[notas,setNotas]=useState('');
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
                                    value={rut}
                                    onChange={(event) => setRut(event.target.value)}
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
                        <Button 
                            theme="primary"
                            className="mb-2 mr-1"
                            onClick={(event)=>onSubmit({'rut':rut,'nombre':nombre,'notas':notas})}
                            >Agregar</Button>
                    </CardBody>

                </Card>
            </Col>
        </Row>
    )
}
Paciente.propTypes={
    onSubmit: PropTypes.func,
}
Paciente.defaultProps={
    onSubmit:()=>{},
}
export default Paciente;