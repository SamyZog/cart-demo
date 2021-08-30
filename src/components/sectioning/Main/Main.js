import Box from "../../layout/Box";
import styles from "./Main.module.scss";

export default function Main({ children }) {
	return (
		<Box as="main" className={styles.Main}>
			{children}
		</Box>
	);
}
