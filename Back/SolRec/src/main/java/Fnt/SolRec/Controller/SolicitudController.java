package Fnt.SolRec.Controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import Fnt.SolRec.Model.Solicitud;

@RestController
public class SolicitudController {

    @GetMapping("/pendientes")
    public List<Solicitud> getPendientes() {
        List<String> list = Arrays.asList("Solicitado");
        return SolicitudService.getSolicitudByEstado(list);
    }

}