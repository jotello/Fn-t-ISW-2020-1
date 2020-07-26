package Fnt.SolRec.Model;

import java.time.LocalDateTime;
import java.util.ArrayList;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Solicitud {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @JoinColumn(name = "paciente_id")
    private Paciente paciente;
    private int idEquipo;
    private String tipoEquipo;
    private ArrayList<Integer> idEquipamiento;
    private String tipoEquipamiento;
    private int sillon;
    private String tipoSillon;
    private int salaRecuperacion;
    private String tipoSalaRecuperacion;
    private int pabellon;
    private String tipoPabellon;
    private ArrayList<String> bloques;
    private String estado = "Solicitado";
    private String descripcion;
    private LocalDateTime dtEmision;

    /**
     * @return int return the id
     */
    public long getId() {
        return id;
    }

    public String getTipoSillon() {
        return tipoSillon;
    }

    public void setTipoSillon(String tipoSillon) {
        this.tipoSillon = tipoSillon;
    }

    public String getTipoSalaRecuperacion() {
        return tipoSalaRecuperacion;
    }

    public void setTipoSalaRecuperacion(String tipoSalaRecuperacion) {
        this.tipoSalaRecuperacion = tipoSalaRecuperacion;
    }

    public String getTipoPabellon() {
        return tipoPabellon;
    }

    public void setTipoPabellon(String tipoPabellon) {
        this.tipoPabellon = tipoPabellon;
    }

    /**
     * @param id the id to set
     */
    public void setId(int id) {
        this.id = id;
    }

    /**
     * @return int return the paciente
     */
    public Paciente getPaciente() {
        return paciente;
    }

    /**
     * @param paciente the paciente to set
     */
    public void setPaciente(Paciente paciente) {
        this.paciente = paciente;
    }

    /**
     * @return int return the idEquipo
     */
    public int getIdEquipo() {
        return idEquipo;
    }

    /**
     * @param idEquipo the idEquipo to set
     */
    public void setIdEquipo(int idEquipo) {
        this.idEquipo = idEquipo;
    }

    /**
     * @return String return the tipoEquipo
     */
    public String getTipoEquipo() {
        return tipoEquipo;
    }

    /**
     * @param tipoEquipo the tipoEquipo to set
     */
    public void setTipoEquipo(String tipoEquipo) {
        this.tipoEquipo = tipoEquipo;
    }

    /**
     * @return int return the idEquipamento
     */
    public ArrayList<Integer> getIdEquipamiento() {
        return idEquipamiento;
    }

    /**
     * @param idEquipamento the idEquipamento to set
     */
    public void setIdEquipamiento(ArrayList<Integer> idEquipamento) {
        this.idEquipamiento = idEquipamento;
    }

    /**
     * @return int return the tipoEquipamento
     */
    public String getTipoEquipamento() {
        return tipoEquipamiento;
    }

    /**
     * @param tipoEquipamento the tipoEquipamento to set
     */
    public void setTipoEquipamento(String tipoEquipamento) {
        this.tipoEquipamiento = tipoEquipamento;
    }

    /**
     * @return int return the sillon
     */
    public int getSillon() {
        return sillon;
    }

    /**
     * @param sillon the sillon to set
     */
    public void setSillon(int sillon) {
        this.sillon = sillon;
    }

    /**
     * @return int return the salaRecuperacion
     */
    public int getSalaRecuperacion() {
        return salaRecuperacion;
    }

    /**
     * @param salaRecuperacion the salaRecuperacion to set
     */
    public void setSalaRecuperacion(int salaRecuperacion) {
        this.salaRecuperacion = salaRecuperacion;
    }

    /**
     * @return int return the pabellon
     */
    public int getPabellon() {
        return pabellon;
    }

    /**
     * @param pabellon the pabellon to set
     */
    public void setPabellon(int pabellon) {
        this.pabellon = pabellon;
    }

    /**
     * @return ArrayList<String> return the bloques
     */
    public ArrayList<String> getBloques() {
        return bloques;
    }

    /**
     * @param bloques the bloques to set
     */
    public void setBloques(ArrayList<String> bloques) {
        this.bloques = bloques;
    }

    /**
     * @return String return the estado
     */
    public String getEstado() {
        return estado;
    }

    /**
     * @param estado the estado to set
     */
    public void setEstado(String estado) {
        this.estado = estado;
    }

    /**
     * @return String return the descripcion
     */
    public String getDescripcion() {
        return descripcion;
    }

    /**
     * @param descripcion the descripcion to set
     */
    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    /**
     * @return LocalDateTime return the dtEmision
     */
    public LocalDateTime getDtEmision() {
        return dtEmision;
    }

    /**
     * @param dtEmision the dtEmision to set
     */
    public void setDtEmision(LocalDateTime dtEmision) {
        this.dtEmision = dtEmision;
    }

}