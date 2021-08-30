import { AiFillShop } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Center from "../../layout/Center";
import Hstack from "../../layout/Hstack";
import styles from "./Header.module.scss";

function Header(props) {
	return (
		<Center as="header" className={styles.Header}>
			<Hstack className={styles.content}>
				<Link to="/">
					<AiFillShop />
				</Link>
				<Link to="/cart">
					<FiShoppingCart />
				</Link>
			</Hstack>
		</Center>
	);
}

export default Header;
