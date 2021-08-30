import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/action/Button/Button";
import Box from "../../components/layout/Box";
import Center from "../../components/layout/Center";
import Hstack from "../../components/layout/Hstack";
import Vstack from "../../components/layout/Vstack";
import { delteItem, setQuantity } from "../../store/cart/cart";
import { objToArray } from "../../utils/utils";
import styles from "./Cartlist.module.scss";

function Cartlist(props) {
	const { items } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	function addQty(id) {
		dispatch(setQuantity({ id, one: 1 }));
	}

	function subtractQty(id) {
		dispatch(setQuantity({ id, one: -1 }));
	}

	function removeItem(id) {
		dispatch(delteItem(id));
	}

	return (
		<Vstack className={styles.Cartlist}>
			{objToArray(items).map(({ id, name, qty, price }) => {
				return qty > 0 ? (
					<Hstack className={styles.item} as="li" key={id}>
						<Center title={name} className={styles.name}>
							{name.length > 10 ? `${name.slice(0, 10)}...` : name}
						</Center>
						<Hstack className={styles.actions}>
							<Button onClick={() => subtractQty(id)}>-</Button>
							<Box>{qty}</Box>
							<Button onClick={() => addQty(id)}>+</Button>
						</Hstack>
						<Center className={styles.price}>{price * qty}$</Center>
						<Center className={styles.delete}>
							<Button style={{ backgroundColor: "var(--danger)" }} onClick={() => removeItem(id)}>
								<AiFillDelete />
							</Button>
						</Center>
					</Hstack>
				) : null;
			})}
		</Vstack>
	);
}

export default Cartlist;
