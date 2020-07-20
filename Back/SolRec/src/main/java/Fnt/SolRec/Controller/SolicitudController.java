package Fnt.SolRec.Controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    @GetMapping("/{id}")
    public Solicitud getSolicitudbyId(@PathVariable("id") int id){
        Solicitud sol = 
        return sol;
    }


    @GetMapping("/pendientes")
    public List<Solicitud> getPendientes() {
        List<String> list = Arrays.asList("Solicitado");
        return (List<Solicitud>) solicitudService.getSolicitudByEstado(list);
    }

}