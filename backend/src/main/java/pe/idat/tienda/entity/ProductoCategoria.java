package pe.idat.tienda.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

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

import lombok.Data;

@Entity
@Table(name = "producto_categoria")
@Data
public class ProductoCategoria {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long idCatProd;
	
	@Column(name = "nombre_categoria")
	private String nombreCategoria;
	
	@Column(name = "descuento")
	private double descuento;
	
	@Column(name = "fecha_creacion")
	@CreationTimestamp
	private Date fechaCreacion;
	
	@Column(name = "fecha_modificacion")
	@UpdateTimestamp
	private Date fechaModificacion;
	
	@Column(name = "fecha_eliminacion")
	@CreationTimestamp
	private Date fechaEliminacion;
	
	@OneToMany( cascade = CascadeType.ALL, mappedBy = "categoriaId")
	private List<Producto> productos = new ArrayList<>();
}
