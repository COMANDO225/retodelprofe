import logo from "../../assets/images/logo.png";
import styles from "../../styles/components/Navbar/Navbar.module.css";
import SearchIcon from "../icons/SearchIcon";

const Navbar = ({ searchPeli, setSearchPeli }) => {
	const handleSearch = (e) => {
		setSearchPeli(e.target.value);
	};

	return (
		<div className={styles.navbar}>
			<div className={styles.topbar}>
				<div className='wrapper'>
					<div className={styles.logo}>
						<img src={logo} alt='logomasna' />
					</div>
				</div>
			</div>
			<div className={styles.search_section}>
				<div className='wrapper'>
					<div className={styles.searchContainer}>
						<div className={styles.searchIcon}>
							<SearchIcon fill={"#c42521"} />
						</div>
						<input
							className={styles.search}
							placeholder='Buscar pelicula'
							type='text'
							value={searchPeli}
							onChange={handleSearch}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
