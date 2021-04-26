package pe.idat.tienda.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.ForeignKey;

import lombok.Data;

@Entity
@Data
@Table(name = "usuario_admin")
public class UsuarioAdmin {
    @Id
    @Column(name = "id_admin")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_admin;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "ultimo_login")
    private Date ultimo_login;

    @Column(name = "creado_en")
    private Date creado_en;

    @Column(name = "modificado_en")
    private Date modificado_en;

    @ManyToOne
    @JoinColumn(name = "id_tipo_admin", nullable = false)
    private TipoAdmin tipo_admin;
}
