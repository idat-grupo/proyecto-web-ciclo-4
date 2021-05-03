package pe.idat.tienda.entity;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Data;

@Entity
@Table(name = "orden_item")
@Data
public class OrdenItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "orden_id")
	private Long orden_id;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "productoId")
	private Producto producto;
	
	@Column(name = "cantidad")
	private int cantidad;
	
	@Column(name = "fecha_creacion")
	@CreationTimestamp
	private Date fechaCreacion;
	
	@Column(name = "fecha_modificacion")
	@UpdateTimestamp
	private Date fechaModificacion;

	public OrdenItem(Long id, Long orden_id, Producto producto, int cantidad, Date fechaCreacion,
			Date fechaModificacion) {
		this.id = id;
		this.orden_id = orden_id;
		this.producto = producto;
		this.cantidad = cantidad;
		this.fechaCreacion = fechaCreacion;
		this.fechaModificacion = fechaModificacion;
	}

	public OrdenItem() {
	}
	
	
	
}
