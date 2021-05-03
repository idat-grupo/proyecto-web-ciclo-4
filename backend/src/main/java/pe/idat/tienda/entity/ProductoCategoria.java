package pe.idat.tienda.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "producto_categoria")
@Getter
@Setter
public class ProductoCategoria {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_categoria_producto")
	private Long idCategoriaProducto;

	@Column(name = "nombre_categoria")
	private String nombre;

	// @Column(name = "descuento")
	// private double descuento;

	// @Column(name = "fecha_creacion")
	// @CreationTimestamp
	// private Date fechaCreacion;

	// @Column(name = "fecha_modificacion")
	// @UpdateTimestamp
	// private Date fechaModificacion;

	// @Column(name = "fecha_eliminacion")
	// @CreationTimestamp
	// private Date fechaEliminacion;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "categoria")
	private Set<Producto> productos;

	public ProductoCategoria(String nombre) {
		super();
		this.nombre = nombre;
	}
	
	
}
