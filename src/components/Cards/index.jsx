import styles from "../../styles/components/Card/Card.module.css";

const PeliCard = ({ pelicula }) => {
	const { title, images, description, releaseYear } = pelicula;

	const imagenMasna = images?.posterArt?.url;

	return (
		<div className={styles.card}>
			<div title={`pelicula ${title}`} className={styles.imagen}>
				<img src={imagenMasna} alt={`pelicula ${title}`} />
				<div className={styles.dataPeli}>
					<div className={styles.header}>
						<h2 className={styles.titulo}>{title}</h2>
					</div>
					<div className={styles.yearpcausa}>
						<p className={styles.year}>{releaseYear}</p>
					</div>
					<div className={styles.body}>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PeliCard;
