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
@Data
@Table(name = "tipo_admin")
public class TipoAdmin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_tipo_admin;

    @Column(name = "tipo")
    private String tipo;

    @Column(name = "permisos")
    private String permisos;

    @Column(name = "creado_en")
    private Date creado_en;

    @Column(name = "modificado_en")
    private Date modificado_en;

    @OneToMany(mappedBy = "tipo_admin", orphanRemoval = true, cascade = { CascadeType.PERSIST,
            CascadeType.REMOVE }, fetch = FetchType.LAZY)
    private List<UsuarioAdmin> usuarios_admin = new ArrayList<>();

}
