package Fnt.SolRec.Controller;


import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import Fnt.SolRec.Model.Horario;
import Fnt.SolRec.Model.Solicitud;
import Fnt.SolRec.Service.HorarioService;
import Fnt.SolRec.Service.SolicitudService;

@CrossOrigin
@RestController
@RequestMapping("")
public class SolicitudController {
    @Autowired
    private SolicitudService solicitudService;
    @Autowired
    private HorarioService horarioService;

    /**
     * Obtiene lista de Solicitudes
     *
     * @return list<Solicitudes>
     */
    @GetMapping("solicitud")
    public Iterable<Solicitud> getSolicitudes(){
        return solicitudService.listAll();
    }
    /**
     *
     * @param id
     *
     * Obtiene la solicitud cuya id sea id
     *
     * @return ResponseEntity<Solicitud>
     */
    @GetMapping("solicitud/{id}")
    public ResponseEntity<Solicitud> getSolicitudbyId(@PathVariable("id")Long id){
        Optional<Solicitud> opt = solicitudService.getbyId(id);
        if (!opt.isPresent()) {
            return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(null);
        }
        else {
            return ResponseEntity
            .status(HttpStatus.OK)
            .body(opt.get());
        }
    }

    /**
     *
     *
     *
     * Obtiene las solicitudes con estado pendiente
     *
     * @return List<Solicitud>
     */
    @GetMapping("solicitud/pendientes")
    public List<Solicitud> getPendientes() {
        return (List<Solicitud>) solicitudService.listAllSol();
    }
    /**
     *
     * @param solicitud
     *
     * Añade las solicitudes a la DB
     *
     * @return Solicitud y HttpStatus
     */
    @PostMapping("solicitud")
    public ResponseEntity<Solicitud> addSolicitud(@RequestBody Solicitud solicitud){
        solicitud.setDtEmision(LocalDateTime.now());
        Solicitud sol= solicitudService.saveOrUpdateSolicitud(solicitud);
        return new ResponseEntity<Solicitud>(sol, HttpStatus.CREATED);
    }
    /**
     *
     * @param newSolicitud
     * @param id
     *
     * Cambia los parametros de una solicitud
     *
     * @return Solicitud y HttpStatus
     */
    @PutMapping("solicitud/{id}")
    public ResponseEntity<Solicitud> updateSolicitud(
    @RequestBody Solicitud newSolicitud,
    @PathVariable("id") Long id){
        Optional<Solicitud> solicitud = solicitudService.getbyId(id);
        if (!solicitud.isPresent()) {
            return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(null);
        }
        Solicitud oldSolicitud = solicitud.get();
        oldSolicitud.setIdEquipo(newSolicitud.getIdEquipo());
        oldSolicitud.setTipoEquipo(newSolicitud.getTipoEquipo());
        oldSolicitud.setIdEquipamiento(newSolicitud.getIdEquipamiento());
        oldSolicitud.setTipoEquipamento(newSolicitud.getTipoEquipamento());
        oldSolicitud.setSillon(newSolicitud.getSillon());
        oldSolicitud.setTipoSillon(newSolicitud.getTipoSillon());
        oldSolicitud.setSalaRecuperacion(newSolicitud.getSalaRecuperacion());
        oldSolicitud.setTipoSalaRecuperacion(newSolicitud.getTipoSalaRecuperacion());
        oldSolicitud.setPabellon(newSolicitud.getPabellon());
        oldSolicitud.setTipoPabellon(newSolicitud.getTipoPabellon());
        oldSolicitud.setBloques(newSolicitud.getBloques());
        oldSolicitud.setDescripcion(newSolicitud.getDescripcion());
        return ResponseEntity
        .status(HttpStatus.OK)
        .body(solicitudService.saveOrUpdateSolicitud(oldSolicitud));
    }
    /**
     *
     *
     * @param id
     *
     * Elimina una Solicitud
     *
     * @return ResponseEntity<String>
     */
    @DeleteMapping("solicitud/{id}")
    public @ResponseBody ResponseEntity<String> deleteSolicitud(@PathVariable Long id ) {
    	solicitudService.delete(id);
    	return new ResponseEntity<String>("Solicitud Eliminada", HttpStatus.OK);

    }

    /**
     *
     *
     * @param id
     *
     * Elimina una Reserva
     *
     * @return ResponseEntity<String>
     */
    @DeleteMapping("reserva/{id}")
    public @ResponseBody ResponseEntity<String> deleteReserva(@PathVariable Long id ) {
        Optional<Solicitud> opt = solicitudService.getbyId(id);
        if (!opt.isPresent() || opt.get().getEstado()!="Reservado") {
            return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body("La reserva no existe");
        }
        Solicitud sol = opt.get();
        List<Horario> horarios = horarioService.getByHorario(sol.getBloques());
        horarioService.removerRes(sol, horarios);
    	solicitudService.delete(id);
    	return new ResponseEntity<String>("Reserva Eliminada", HttpStatus.OK);
    }


    /**
     * Obtiene lista de Reservas
     *
     * @return list<Reservas>
     */
    @GetMapping("reserva")
    public Iterable<Solicitud> getReservas(){
        return solicitudService.listAllRes();
    }



    /**
     *
     * @param id
     *
     * Obtiene la reserva cuya id sea id
     *
     * @return Solicitud
     */
    @GetMapping("reserva/{id}")
    public ResponseEntity<Solicitud> getReservabyId(@PathVariable("id") Long id){
        Optional<Solicitud> opt = solicitudService.getbyId(id);
        if (!opt.isPresent()) {
            return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(null);
        }
        else {
            return ResponseEntity
            .status(HttpStatus.OK)
            .body(opt.get());
        }
    }
    /**
     *
     * @param id
     *
     * Cambia el estado de la reserva a Finalizado
     *
     * @return ResponseEntity<Solicitud>
     */
    @PutMapping("reserva/{id}/finalizar")
    public ResponseEntity<Solicitud> finalizarReserva(
    @PathVariable("id") Long id){
        Optional<Solicitud> solicitud = solicitudService.getbyId(id);
        if (!solicitud.isPresent()) {
            return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(null);
        }
        Solicitud sol = solicitud.get();
        List<Horario> horarios = horarioService.getByHorario(sol.getBloques());
        horarioService.removerRes(sol, horarios);
        sol.setEstado("Finalizado");
        return ResponseEntity
        .status(HttpStatus.OK)
        .body(solicitudService.saveOrUpdateSolicitud(sol));
    }
    /**
     *
     * @param id
     *
     * Cambia el estado de la solicitud a Reservado
     *
     * @return ResponseEntity<Solicitud>
     */
    @PutMapping("solicitud/{id}/reservar")
    public ResponseEntity<Solicitud> reservar(
    @PathVariable("id") Long id){
        Optional<Solicitud> solicitud = solicitudService.getbyId(id);
        if (!solicitud.isPresent()) {
            return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(null);
        }
        Solicitud oldReserva = solicitud.get();
        ResponseEntity<List<Horario>> res = horarioService.revisarChoque(oldReserva);
        if (res.getStatusCode() == HttpStatus.CONFLICT){
            return ResponseEntity
            .status(HttpStatus.CONFLICT)
            .header("choques", res.getHeaders().get("choques").toString())
            .body(oldReserva);
        }
        List<Horario> horarios= res.getBody();
        horarioService.agregarRes(oldReserva, horarios);
        oldReserva.setEstado("Reservado");
        oldReserva.setDtEmision(LocalDateTime.now());
        return ResponseEntity
        .status(HttpStatus.OK)
        .body(solicitudService.saveOrUpdateSolicitud(oldReserva));
    }
    /**
     *
     * @param id,newsolicitud
     *
     * Cambia el estado de la reserva a Finalizado
     *
     * @return ResponseEntity<Solicitud>
     */
    @PutMapping("reserva/{id}")
    public ResponseEntity<Solicitud> updateReserva(
    @RequestBody Solicitud newSolicitud,
    @PathVariable("id") Long id){
        Optional<Solicitud> solicitud = solicitudService.getbyId(id);
        if (!solicitud.isPresent()) {
            return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(null);
        }
        Solicitud oldReserva = solicitud.get();
        List<Horario> oldHorarios = horarioService.getByHorario(oldReserva.getBloques());
        horarioService.removerRes(oldReserva, oldHorarios);
        ResponseEntity<List<Horario>> res = horarioService.revisarChoque(newSolicitud);
        if (res.getStatusCode() == HttpStatus.CONFLICT){
            return ResponseEntity
            .status(HttpStatus.CONFLICT)
            .header("choques", res.getHeaders().get("choques").toString())
            .body(newSolicitud);
        }
        List<Horario> horarios= res.getBody();
        horarioService.agregarRes(newSolicitud, horarios);
        oldReserva.setIdEquipo(newSolicitud.getIdEquipo());
        oldReserva.setTipoEquipo(newSolicitud.getTipoEquipo());
        oldReserva.setIdEquipamiento(newSolicitud.getIdEquipamiento());
        oldReserva.setTipoEquipamento(newSolicitud.getTipoEquipamento());
        oldReserva.setSillon(newSolicitud.getSillon());
        oldReserva.setTipoSillon(newSolicitud.getTipoSillon());
        oldReserva.setSalaRecuperacion(newSolicitud.getSalaRecuperacion());
        oldReserva.setTipoSalaRecuperacion(newSolicitud.getTipoSalaRecuperacion());
        oldReserva.setPabellon(newSolicitud.getPabellon());
        oldReserva.setTipoPabellon(newSolicitud.getTipoPabellon());
        oldReserva.setBloques(newSolicitud.getBloques());
        oldReserva.setDescripcion(newSolicitud.getDescripcion());
        return ResponseEntity
        .status(HttpStatus.OK)
        .body(solicitudService.saveOrUpdateSolicitud(oldReserva));
    }

}
