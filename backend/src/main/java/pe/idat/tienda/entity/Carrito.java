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
@Table(name = "carrito")
@Data
public class Carrito {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "user_id")
	private Long userId;
	
	@OneToMany( cascade = CascadeType.ALL, mappedBy = "carritoId")
	private List<CarritoItem> carritoItem = new ArrayList<>();
	
	@Column(name = "total")
	private Double total;
	
	@Column(name = "fecha_creacion")
	@CreationTimestamp
	private Date fechaCreacion;
	
	@Column(name = "fecha_modificacion")
	@UpdateTimestamp
	private Date fechaModificacion;

	public Carrito(Long id, Long userId, List<CarritoItem> carritoItem, Double total, Date fechaCreacion,
			Date fechaModificacion) {
		this.id = id;
		this.userId = userId;
		this.carritoItem = carritoItem;
		this.total = total;
		this.fechaCreacion = fechaCreacion;
		this.fechaModificacion = fechaModificacion;
	}

	public Carrito() {
	}
	
	
	
}
