import React from "react";
import {Link} from "react-router-dom";
import dateformat from "dateformat";
import { Container, Row, Col, Card, Button, CardHeader, CardBody } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import ReservaService from '../services/reserva.service';




class Reservas extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lReservas : []
      };
    }
    
    handleGetReservas() {
      ReservaService.getAll()
          .then(response => {
            this.setState({lReservas : response.data});
          })
          .catch((error) => console.log(error));
    }
    handleDeleteReserva(id) {
      ReservaService.remove(id)
        .catch((error) => console.log(error));
    }
    handleGetReserva(id) {
      ReservaService.show(id)
        .then(response => {
          this.setState({Solicitud : response.data});
        })
        .catch((error) => console.log(error));
      
    }
    handleFinalizarReserva(id){
      ReservaService.finalizar(id)
      .then(response => {
        this.setState({Reserva : response.data});
        
      })
      .catch((error) =>alert(error));
    }
   

    render() {
      this.handleGetReservas();
      const p = this.state.lReservas;
      return(
    <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Lista de Reservas" subtitle="Reservas" className="text-sm-left" />
    </Row>
    {/* Default Light Table */}
   
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Reservas</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">

            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Descripción
                  </th>
                  <th scope="col" className="border-0">
                    Fecha de emisión
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  p.length === 0 ?
                  <tr align="center">
                    <td colSpan="3">No hay reservas</td>
                  </tr> :
                  p.map((pac) => (
                    <tr key={pac.id}>
                      <td>{pac.id}</td>
                      <td>{pac.descripcion}</td>
                      <td>{dateformat(pac.dtEmision, "dd/mm/yyyy, HH:MM")}</td>
                      <td>
                        <Button id={pac.id}  onClick={()=>this.handleFinalizarReserva(pac.id)}>Finalizar</Button>
                      </td>
                      
                      <td>
                      <Button id={pac.id + "delete"} onClick={() => this.handleDeleteReserva(pac.id)} theme="primary" className="mb-2 mr-1">
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

export default Reservas;