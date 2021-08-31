import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/action/Button/Button";
import Box from "../../../components/layout/Box";
import Divider from "../../../components/layout/Divider";
import Hstack from "../../../components/layout/Hstack";
import Vstack from "../../../components/layout/Vstack";
import { delteItem, setQuantity } from "../../../store/cart/cart";
import { objToArray } from "../../../utils/utils";
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
		<Vstack as="ul" className={styles.Cartlist} justify="flex-start">
			{objToArray(items)
				.sort((a, b) => b.id - a.id)
				.map(({ id, name, qty, price }) => {
					return qty > 0 ? (
						<Vstack key={id} className={styles.item} as="li" align="flex-start">
							<Hstack style={{ width: "100%" }}>
								<Box className={styles.name}>
									{name.length > 10 ? `${name.splice(0, 10)}...` : name}
								</Box>
								<Hstack>
									<Hstack className={styles.actions}>
										<Button onClick={() => addQty(id)}>+</Button>
										<Box>{qty}</Box>
										<Button onClick={() => subtractQty(id)}>-</Button>
									</Hstack>
									<Box className={styles.price}>{price * qty}$</Box>
								</Hstack>
							</Hstack>
							<Divider />
							<Box>
								<Button style={{ backgroundColor: "var(--danger)" }} onClick={() => removeItem(id)}>
									<MdDelete />
								</Button>
							</Box>
						</Vstack>
					) : null;
				})}
		</Vstack>
	);
}

export default Cartlist;
