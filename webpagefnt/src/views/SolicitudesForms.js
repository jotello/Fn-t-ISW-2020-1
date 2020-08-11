import React,{Component} from "react";
import {
    Container,
    Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Solicitud from "../components/forms/Solicitud"
import solicitudService from '../services/solicitud.service';


class AddNewSolicitud extends Component{
    constructor(props){
        super(props);

        this.handleSolicitudSubmit = this.handleSolicitudSubmit.bind(this);
    }
    handleSolicitudSubmit(data) {
        solicitudService.create(data)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
          console.log(data);
      }
      
    render() {

        return (
          <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <PageTitle sm="4" title="Agregar solicitud" subtitle="Solicitudes" className="text-sm-left" />
            </Row>
    
            <Solicitud
              onSubmit={this.handleSolicitudSubmit}
            ></Solicitud>
             
          </Container>
        );
      }

};
export default AddNewSolicitud;