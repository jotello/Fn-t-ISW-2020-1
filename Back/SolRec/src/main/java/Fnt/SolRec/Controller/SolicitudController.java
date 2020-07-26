package Fnt.SolRec.Controller;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import Fnt.SolRec.Model.Solicitud;
import Fnt.SolRec.Service.SolicitudService;

@RestController
@RequestMapping("")
public class SolicitudController {
    @Autowired 
    private SolicitudService solicitudService;

    /**
     * Obtiene lista de Solicitudes
     * 
     * @return list<Solicitudes>
     */
    @GetMapping("solicitud/")  
    public Iterable<Solicitud> getSolicitudes(){
        return solicitudService.listAll();
    }
    /**
     * 
     * @param id
     * 
     * Obtiene la solicitud cuya id sea id
     * 
     * @return
     */
    @GetMapping("solicitud/{id}")
    public ResponseEntity<Solicitud> getSolicitudbyId(@PathVariable("id") final Long id){
        Optional<Solicitud> opt = solicitudService.getbyId(id);
        if (opt.isPresent()) {
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
    @PostMapping("solicitud/")
    public ResponseEntity<Solicitud> addSolicitud(Solicitud solicitud){
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
        oldSolicitud.setPaciente(newSolicitud.getPaciente());
        oldSolicitud.setIdEquipo(newSolicitud.getIdEquipo());
        oldSolicitud.setTipoEquipo(newSolicitud.getTipoEquipo());
        oldSolicitud.setIdEquipamento(newSolicitud.getIdEquipamento());
        oldSolicitud.setTipoEquipamento(newSolicitud.getTipoEquipamento());
        oldSolicitud.setSillon(newSolicitud.getSillon());
        oldSolicitud.setTipoSillon(newSolicitud.getTipoSillon());
        oldSolicitud.setSalaRecuperacion(newSolicitud.getSalaRecuperacion());
        oldSolicitud.setTipoSalaRecuperacion(newSolicitud.getTipoSalaRecuperacion());
        oldSolicitud.setPabellon(newSolicitud.getPabellon());
        oldSolicitud.setBloques(newSolicitud.getBloques());
        oldSolicitud.setDescripcion(newSolicitud.getDescripcion());
        oldSolicitud.setDtEmision(newSolicitud.getDtEmision());
        return ResponseEntity
        .status(HttpStatus.OK)
        .body(solicitudService.saveOrUpdateSolicitud(oldSolicitud)); 
    }

    /**
     * Obtiene lista de Reservas
     * 
     * @return list<Reservas>
     */
    @GetMapping("reserva/")  
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
        if (opt.isPresent()) {
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

}