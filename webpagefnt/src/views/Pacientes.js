import React from "react";
import {Link} from "react-router-dom"
import { Container, Row, Col, Card, Button, CardHeader, CardBody } from "shards-react";
import {
  PopupboxManager,
  PopupboxContainer
} from 'react-popupbox';
import PageTitle from "../components/common/PageTitle";
import PacienteService from '../services/paciente.service';
import VerPaciente from './VerPaciente'




class Pacientes extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lPacientes : []
      };
    }
    openPopupbox(pac) {
      console.log('Aca LLegi');
      const content = (
        <div>
          <VerPaciente paciente={pac}/>
        </div>
      )
      PopupboxManager.open({content})
    }
    sortByID(x,y) {
      return x.id - y.id;
    }
    
    handleGetPacientes() {
      PacienteService.getAll()
          .then(response => {
            this.setState({lPacientes : response.data});
          })
          .catch((error) => console.log(error));
    }
    handleDeletePacientes(id) {
      PacienteService.remove(id)
        .catch((error) => console.log(error));
    }
    handleGetPaciente(id) {
      PacienteService.show(id)
        .then(response => {
          this.setState({Paciente : response.data});
        })
        .catch((error) => console.log(error));
      
    }
   

    render() {
      this.handleGetPacientes();
      const p = this.state.lPacientes;
      p.sort(this.sortByID);
      return(
    <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista de pacientes" subtitle="Pacientes" className="text-sm-left" />
    </Row>
    
    {/* Default Light Table */}
    <Row>
    <Col>
    <Link to="/agregar-paciente">
      <Button theme="primary" className="mb-2 mr-1">
        Agregar paciente
      </Button>
    </Link>
    </Col>
    </Row>
    
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Pacientes</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">

          <PopupboxContainer />
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Nombre
                  </th>
                  <th scope="col" className="border-0">
                    Rut
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  p.length === 0 ?
                  <tr align="center">
                    <td colSpan="3">No hay pacientes</td>
                  </tr> :
                  p.map((pac) => (
                    <tr key={pac.id}>
                      <td>{pac.id}</td>
                      <td>{pac.nombre}</td>
                      <td>{pac.rut}</td>
                      <td>
                      
                      <Button id={pac.id} onClick={() => this.openPopupbox(pac)} theme="primary" className="mb-2 mr-1" >
                      
                      Ver
                                           
                      </Button>
                      
                      
                      </td>
                      <td>
                      <Link to={{
                        pathname:"/editar-paciente",
                        search:"?id=id_paciente",
                        hash:"",
                        state:{ id:pac.id},
                        }} >
                      <Button id={pac.id} theme="primary" className="mb-2 mr-1" >
                      Editar
                      </Button>
                      </Link>
                      </td>
                      <td>
                      <Button id={pac.id + "delete"} onClick={() => this.handleDeletePacientes(pac.id)} theme="primary" className="mb-2 mr-1">
                      Eliminar
                      </Button>
                      </td>
                    </tr>
                  ))
                  
                }
              </tbody>
            </table>
            
          </CardBody>
          
        </Card>
      </Col>
    </Row>
  </Container>
        );
    };
}

export default Pacientes;