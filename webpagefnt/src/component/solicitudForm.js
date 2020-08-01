import React from 'react';

class solicitudForm extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <h3>Agregar nueva solicitud</h3>
                    <label>Rut Paciente</label>
                    <input type="text" value="XX.XXX.XXX-X" />
                </form>
            </div>
        )
    }
}
export default solicitudForm