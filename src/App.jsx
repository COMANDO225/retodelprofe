import api from "./services/api";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PelisGrid from "./components/Grids/PelisGrid";
import styles from "./styles/App.module.css";

const App = () => {
	const [peliculas, setPeliculas] = useState([]);
	const [loading, setLoading] = useState(false);
	const [searchPeli, setSearchPeli] = useState("");

	const getPeliculas = async () => {
		setLoading(true);
		const res = await api.get("/data.json");
		const { entries } = res.data;
		setPeliculas(entries);
		setLoading(false);
		console.log(entries);
	};

	useEffect(() => {
		getPeliculas();
	}, []);

	return (
		<>
			<Navbar searchPeli={searchPeli} setSearchPeli={setSearchPeli} />
			<main className={styles.main}>
				<div className='wrapper'>
					{searchPeli ? (
						<h1 className={styles.tituloMain}>
							Buscando: "{searchPeli}" mi king
						</h1>
					) : (
						<h1 className={styles.tituloMain}>Peliculas populares</h1>
					)}
					<PelisGrid peliculas={peliculas} searchPeli={searchPeli} />
				</div>
			</main>
		</>
	);
};

export default App;
