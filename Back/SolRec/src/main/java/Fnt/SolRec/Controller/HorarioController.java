package Fnt.SolRec.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Fnt.SolRec.Model.Horario;
import Fnt.SolRec.Service.HorarioService;

@RestController
@RequestMapping("horario")
public class HorarioController {
    
	@Autowired
	private HorarioService horarioService;

	/**
	 * Obtener lista de Horarios
	 * @return Iterable<Horario> 
     */
	@GetMapping("")
	public Iterable<Horario> getHorarios(){
		return horarioService.listAll();
	}
	/**
	 * Crea Horario
	 *
	 * @return Horario HttpStatus.Created
	 */
	@PostMapping("")
	public ResponseEntity<Horario> addHorario(@RequestBody Horario horario){
		Horario newHorario = horarioService.saveOrUpdateHorario(horario);
		return new ResponseEntity<Horario>(newHorario, HttpStatus.CREATED);
	}

	/**
	 * Se obtiene horario por id
	 *
	 * @return Optional<Horario>
	 */
	@GetMapping("/{id}")
	public Optional<Horario> getHorariobyId(@PathVariable("id") long id){
		return horarioService.getbyId(id);
    }
    
    /**
	 * Se obtiene horario por lista de horarios (String)
	 *
	 * @return List<Horario>
	 */
	@GetMapping("/stringsearch")
	public ResponseEntity<List<Horario>> getHorarioByList(@RequestBody List<String> horarios){
		return ResponseEntity.status(HttpStatus.OK).body(horarioService.getByHorario(horarios));
	}

	/**
	 * Modificar Horario
     * 
     * @return ResponseEntity<Horario>
	 */
	 @PutMapping("/{id}")
     public ResponseEntity<Horario> updateHorario(
     @RequestBody Horario newHorario,
     @PathVariable("id") Long id){
         Optional<Horario> horario = horarioService.getbyId(id);
         if (!horario.isPresent()) {
             return ResponseEntity
             .status(HttpStatus.NOT_FOUND)
             .body(null);
         }
         Horario oldHorario = horario.get();
         oldHorario.setHorario(newHorario.getHorario());
         oldHorario.setReservas(newHorario.getReservas());
         oldHorario.setPaciente(newHorario.getPaciente());
         oldHorario.setIdEquipamiento(newHorario.getIdEquipamiento());
         oldHorario.setIdEquipo(newHorario.getIdEquipo());
         oldHorario.setSillon(newHorario.getSillon());
         oldHorario.setSalaRecuperacion(newHorario.getSalaRecuperacion());
         oldHorario.setPabellon(newHorario.getPabellon());
         return ResponseEntity
         .status(HttpStatus.OK)
         .body(horarioService.saveOrUpdateHorario(oldHorario));
     }

	/**
	 * Eliminar Horario
     * 
     * @return ResponseEntity<String>
	 */
	@DeleteMapping("/{id}")
	public @ResponseBody ResponseEntity<String>  deleteHorario(@PathVariable("id") long id){
		horarioService.delete(id);
		return new ResponseEntity<String>("Horario eliminado", HttpStatus.OK);
	}
}