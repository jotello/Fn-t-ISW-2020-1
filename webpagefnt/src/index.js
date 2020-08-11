<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
=======
import React from 'react'
import ReactDOM from 'react-dom'
import SolicitudForm from './component/solicitudForm'
import PacienteForm from './component/PacienteForm'

const element=(
	<div>
		<PacienteForm/>
	</div>
		
	
)

const container= document.getElementById('root')

ReactDOM.render(element,container)     // que-Donde 
>>>>>>> 20d7fe04648ded2119d3b0a3dac8a257e9f096ed

ReactDOM.render(<App />, document.getElementById('root'));

