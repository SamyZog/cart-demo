/* eslint-disable default-case */
import { useRef, useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../components/action/Button/Button";
import Center from "../../../components/layout/Center";
import Divider from "../../../components/layout/Divider";
import Vstack from "../../../components/layout/Vstack";
import { addItem } from "../../../store/cart/cart";
import styles from "./Cartform.module.scss";

function Cartform({ setMounted }) {
	const modalRef = useRef();
	const dispatch = useDispatch();
	const [{ name, price, qty }, setValues] = useState({
		name: "",
		price: "",
		qty: "",
	});
	const [{ validName, validPrice, validQty }, setValidate] = useState({
		validName: false,
		validPrice: false,
		validQty: false,
	});

	const { items } = useSelector((state) => state.cart);

	function closeForm() {
		modalRef.current.animate({ opacity: 0 }, { duration: 200 }).finished.then(() => setMounted(false));
	}

	function handleInputChange(e, key) {
		const input = e.target.value;
		let test;

		switch (key) {
			case "name":
				test = /^\S+/g.test(input) && input.length > 0 && typeof input === "string";
				setValidate((state) => ({ ...state, validName: test }));
				break;
			case "price":
				test = /\d/.test(input) && input >= 0;
				setValidate((state) => ({ ...state, validPrice: test }));
				break;
			case "qty":
				test = /^\d+$/g.test(input) && input > 0;
				setValidate((state) => ({ ...state, validQty: test }));
				break;
		}

		setValues((state) => ({ ...state, [key]: e.target.value }));
	}

	function submitForm(e) {
		e.preventDefault();
		if (validName && validPrice && validQty) {
			const newItem = {
				id: Date.now().toString(),
				name,
				price: +price,
				qty: +qty,
			};
			dispatch(addItem(newItem));
			setMounted(false);
		} else {
			alert("Invalid input!");
		}
	}

	return (
		<Center className={styles.Cartform} ref={modalRef}>
			<Vstack className={styles.formcontainer}>
				<Button onClick={closeForm}>
					<VscChromeClose />
				</Button>
				<h1>ADD ITEM TO CART</h1>
				<Divider />
				<p>
					All fields are required <span>*</span>
				</p>
				<Vstack className={styles.form} as="form" onSubmit={submitForm}>
					<input
						style={{ "--common": validName ? "#46b5d1" : "#da0037" }}
						autoFocus
						type="text"
						placeholder="Item name (min. 1 char)"
						onChange={(e) => handleInputChange(e, "name")}
						value={name}
					/>
					<input
						style={{ "--common": validPrice ? "#46b5d1" : "#da0037" }}
						type="text"
						placeholder="Item price (number >= 0)"
						onChange={(e) => handleInputChange(e, "price")}
						value={price}
					/>
					<input
						style={{ "--common": validQty ? "#46b5d1" : "#da0037" }}
						type="text"
						placeholder="Item quantity (whole number > 0)"
						onChange={(e) => handleInputChange(e, "qty")}
						value={qty}
					/>
					<Divider />
					<Button>ADD ITEM +</Button>
				</Vstack>
			</Vstack>
		</Center>
	);
}

export default Cartform;
