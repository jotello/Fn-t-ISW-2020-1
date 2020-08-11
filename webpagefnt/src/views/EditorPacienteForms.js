import React,{Component} from "react";
import {
    Container,
    Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import EditarPaciente from "../components/forms/EditarPaciente"
import pacienteService from '../services/paciente.service';


class EditPaciente extends Component{
    constructor(props){
        super(props);
        
        this.handlePacienteSubmit = this.handlePacienteSubmit.bind(this);
        this.state = {
            id:'',
            nombre:'',
            rut:'',
            notas:'',
          };
          this.handlePacienteGet(this.props.location.state.id);

        //console.log('HOla')
    }
    handlePacienteSubmit(data) {
        

        pacienteService.update(data)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
          console.log(data);
      }
      handlePacienteGet(id) {
        pacienteService.show(id)
          .then(response => {
            this.setState({id:response.data.id});
            this.setState({rut:response.data.rut});
            this.setState({nombre:response.data.nombre});
            this.setState({notas:response.data.notas});
          })
          .catch((error) => console.log(error));
      }
      
    render() {
        this.handlePacienteGet(this.props.location.state.id);
        const p ={'id':this.state.id,'nombre':this.state.nombre,'rut':this.state.rut,'notas':this.state.notas};
        //console.log(p);
        //console.log('ACA llego');

        return (
          <Container fluid className="main-content-container px-4 pb-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
              <PageTitle sm="4" title="Editar Paciente" subtitle="Pacientes" className="text-sm-left" />
            </Row>
    
            <EditarPaciente paciente={p}
              onSubmit={this.handlePacienteSubmit}
            ></EditarPaciente>
             
          </Container>
        );
      }

};
export default EditPaciente;