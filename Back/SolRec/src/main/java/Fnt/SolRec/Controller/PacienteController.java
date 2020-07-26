package Fnt.SolRec.Controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Fnt.SolRec.Model.Paciente;
import Fnt.SolRec.Service.PacienteService;

@RestController
@RequestMapping("paciente/")
public class PacienteController {

	@Autowired
	private PacienteService pacienteService;

	/*
	 * Obtener lista de pacientes
	 *@return List Pacientes */
	@GetMapping("")
	public Iterable<Paciente> getPacientes(){
		return pacienteService.listAll();
	}
	/*
	 * Crea Paciente
	 *
	 * @return Paciente HttpStatus.Created
	 * */
	@PostMapping("")
	public ResponseEntity<Paciente> addPaciente(Paciente paciente){
		Paciente pas = pacienteService.saveOrUpdatePaciente(paciente);
		return new ResponseEntity<Paciente>(pas, HttpStatus.CREATED);

	}

	/*
	 *Se obtiene paciente por id
	 *
	 * @return Paciente
	 **/
	@GetMapping("/{id}")
	public Optional<Paciente> getPacientebyId(@PathVariable("id") long id){
		return pacienteService.getbyId(id);
	}

	/*
	 * Aca va Modificar
	 * */

	/*
	 * Aca va eliminar
	 * */
	@DeleteMapping("/{id}")
	public @ResponseBody ResponseEntity<String>  deletePaciente(@PathVariable("id") long id){
		PacienteService.delete(id);
		return new ResponseEntity<String>("Paciente eliminado", HttpStatus.OK);
	}
}
