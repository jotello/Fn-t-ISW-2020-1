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
import Fnt.SolRec.Reposoitory.SolicitudRepository;
import Fnt.SolRec.Service.SolicitudService;

@RestController
@RequestMapping("solicitud/")
public class SolicitudController {
    @Autowired 
    private SolicitudService solicitudService;

    /**
     * Obtiene lista de Solicitudes
     * 
     * @return list<Solicitudes>
     */
    @GetMapping("")  
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
    @GetMapping("/{id}")
    public Solicitud getSolicitudbyId(@PathVariable("id") final Long id){
        return solicitudService.getbyId(id);
        
    }

    /**
     * 
     *
     * 
     * Obtiene las solicitudes con estado pendiente
     * 
     * @return List<Solicitud>
     */
    @GetMapping("/pendientes")
    public List<Solicitud> getPendientes() {
        final List<String> list = Arrays.asList("Solicitado");
        return (List<Solicitud>) solicitudService.getSolicitudByEstado(list);
    }
    /**
     * 
     * @param solicitud
     * 
     * Añade las solicitudes a la DB
     * 
     * @return Solicitud y HttpStatus
     */
    @PostMapping("")
    public ResponseEntity<Solicitud> addSolicitud(@RequestBody final Solicitud solicitud){
        final Solicitud sol= solicitudService.saveOrUpdateSolicitud(solicitud);
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
    @PutMapping("/{id}")
    public ResponseEntity<Solicitud> updateSolicitud(
    @RequestBody Solicitud newSolicitud, 
    @PathVariable("id") Long id){
        Optional<Solicitud> solicitud = solicitudService.getbyId(id);
        if (!solicitud.isPresent()) {
            return ResponseEntity
            .status(HttpStatus.NOT_FOUND)
            .body(solicitud.get());
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
        oldSolicitud.setEstado(newSolicitud.getEstado());
        oldSolicitud.setDescripcion(newSolicitud.getDescripcion());
        oldSolicitud.setDtEmision(newSolicitud.getDtEmision());
        return ResponseEntity
        .status(HttpStatus.OK)
        .body(solicitudService.saveOrUpdateSolicitud(oldSolicitud)); 
    }
}