import styles from "../../styles/components/Grids/PelisGrid.module.css";
import PeliCard from "../Cards";

const PelisGrid = ({ peliculas, searchPeli }) => {
	const peliculasFiltradas = peliculas.filter((pelicula) => {
		return pelicula.title.toLowerCase().includes(searchPeli.toLowerCase());
	});

	return (
		<div className={styles.grid_container}>
			<div className={styles.grid}>
				{peliculasFiltradas?.map((pelicula, i) => (
					<div key={i} className={styles.grid_item}>
						<PeliCard pelicula={pelicula} />
					</div>
				))}
			</div>
			{peliculasFiltradas.length === 0 && (
				<h1
					style={{
						width: "100%",
						color: "white",
						textAlign: "center",
					}}
				>
					no hay nada mano uu
				</h1>
			)}
		</div>
	);
};

export default PelisGrid;
