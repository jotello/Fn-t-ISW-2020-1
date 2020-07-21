package Fnt.SolRec.Controller;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.hibernate.loader.custom.Return;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import Fnt.SolRec.Model.Solicitud;
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
    public Optional<Solicitud> getSolicitudbyId(@PathVariable("id") Long id){
        return solicitudService.getbyId(id);
        
    }


    @GetMapping("/pendientes")
    public List<Solicitud> getPendientes() {
        List<String> list = Arrays.asList("Solicitado");
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
    public ResponseEntity<Solicitud> addSolicitud(@RequestBody Solicitud solicitud){
        Solicitud sol= solicitudService.saveOrUpdateSolicitud(solicitud);
        return new ResponseEntity<Solicitud>(sol, HttpStatus.CREATED);
    }

}