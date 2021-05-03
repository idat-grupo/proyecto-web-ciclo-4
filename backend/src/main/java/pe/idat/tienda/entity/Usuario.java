package pe.idat.tienda.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name = "usuario")
@Data
public class Usuario {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id_usuario;

        @Column(name = "username")
        private String username;

        @Column(name = "password")
        private String password;

        @Column(name = "nombre")
        private String nombre;

        @Column(name = "apellido")
        private String apellido;

        @Column(name = "telefono")
        private String telefono;

        @Column(name = "creado_en")
        private Date creado_en;

        @Column(name = "modificado_en")
        private Date modificado_en;

        @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
        private List<UsuarioDireccion> usuarios_direcciones = new ArrayList<>();

        @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
        private List<UsuarioPago> usuarios_admin = new ArrayList<>();

        @OneToMany(mappedBy = "usuario", orphanRemoval = true, cascade = CascadeType.ALL, fetch = FetchType.LAZY)
        private List<Orden> ordenes = new ArrayList<>();

        // @OneToMany(mappedBy = "usuario", cascade = CascadeType.ALL)
        // private List<Token> tokens = new ArrayList<>();

}