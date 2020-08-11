import React from 'react';
//import {checkRut} from './js/rut';
class PacienteForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            rut:'XX.XXX.XXX-X',
            nombre: '',
            notas: ''
        };
        this.handleChangeNombre= this.handleChange.bind(this);
        this.handleChangeRut= this.handleChange.bind(this);
        this.handleChangeNotas= this.handleChange.bind(this);
          
    }
    handleChangeNombre(event) {
        this.setState({nombre: event.target.value});
      }
    handleChangeRut(event) {
        this.setState({rut: event.target.value});
      }
      handleChangeNotas(event) {
        this.setState({notas: event.target.value});
      }
    /*verificarRut(event){
        checkRut({rut:event.target.value});
    }*/
    
    render(){
        return(
            <div>
                <form>
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input id="nombre" type="text" onChange={this.handleChangeNombre}/>
                    </div>
                    <div>
                        <label htmlFor="rut">Rut:</label>
                        <input id="rut" type="text"  onChange={this.handleChangeRut}/>
                    </div>
                    <div>                    
                        <label htmlFor="notas">Notas:</label>
                        <input id="notas" type="text" onChange={this.handleChangeNotas}/>
                    </div>
                    <div>
                        <input type="submit" value="Registrar"/>
                    </div>
                    <p>Hola</p>
                    <p>{this.state.nombre}</p>
                    <p>{this.state.rut}</p>
        <p>{this.state.notas}</p>

                </form>
            </div>
        )
    }


}
export default PacienteForm;