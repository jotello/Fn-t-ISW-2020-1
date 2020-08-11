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
            paciente : {id:'',rut:'',nombre:'',notas:''},
          };

        //console.log('HOla')
    }
    handlePacienteSubmit(data) {
        console.log(data)
        pacienteService.update(data)
          .then((response) => console.log(response))
          .catch((error) => console.log(error));
          console.log(data);
      }
      handlePacienteGet(id) {
        pacienteService.show(id)
          .then(response => {
            this.setState({paciente : response.data});
          })
          .catch((error) => console.log(error));
      }
      
    render() {
        this.handlePacienteGet(this.props.location.state.id);
        const p = this.state.paciente;
        console.log(p);
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