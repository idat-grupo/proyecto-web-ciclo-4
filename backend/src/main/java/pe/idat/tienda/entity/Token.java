// package pe.idat.tienda.entity;

// import java.time.LocalDateTime;

// import javax.persistence.Column;
// import javax.persistence.Entity;
// import javax.persistence.GeneratedValue;
// import javax.persistence.GenerationType;
// import javax.persistence.Id;
// import javax.persistence.JoinColumn;
// import javax.persistence.ManyToOne;
// import javax.persistence.SequenceGenerator;
// import javax.persistence.Table;

// import lombok.Data;
// import lombok.NoArgsConstructor;

// @Entity
// @Table(name = "orden")
// @Data
// // @NoArgsConstructor
// public class Token {
// // @SequenceGenerator(name = "confirmation_token_sequence", sequenceName =
// // "confirmation_token_sequence", allocationSize = 1)
// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY /* generator =
// "confirmation_token_sequence" */)
// private Long id_token;

// @Column(nullable = false)
// private String token;

// @Column(nullable = false)
// private LocalDateTime creado_en;

// @Column(nullable = false)
// private LocalDateTime expira_en;

// @Column(nullable = false)
// private LocalDateTime confirmado_en;

// @ManyToOne
// @JoinColumn(name = "id_usuario", nullable = false)
// private Usuario usuario;

// }
