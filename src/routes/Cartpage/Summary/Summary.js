import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/action/Button/Button";
import Box from "../../../components/layout/Box";
import Vstack from "../../../components/layout/Vstack";
import { clearCart } from "../../../store/cart/cart";
import { objToArray } from "../../../utils/utils";
import styles from "./Summary.module.scss";

function Summary(props) {
	const { items } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	function deleteAllItems() {
		dispatch(clearCart());
	}

	const getTotalQty = (acc, val) => {
		return acc + val.qty;
	};

	const getTotalSum = (acc, val) => {
		const total = val.qty * val.price;
		return acc + total;
	};

	const totalQty = objToArray(items).reduce(getTotalQty, 0);

	const totalSum = objToArray(items).reduce(getTotalSum, 0);
	return (
		<Vstack className={styles.Summary}>
			<Box>Items: {totalQty}</Box>
			<Box>Sum: {totalSum}$</Box>
			<Button>CHECKOUT</Button>
			<Button onClick={deleteAllItems}>CLEAR CART</Button>
		</Vstack>
	);
}

export default Summary;
