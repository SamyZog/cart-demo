import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/action/Button/Button";
import Box from "../../components/layout/Box";
import Center from "../../components/layout/Center";
import Hstack from "../../components/layout/Hstack";
import Section from "../../components/layout/Section";
import { setCartItems } from "../../store/cart/cart";
import { objToArray } from "../../utils/utils";
import Cartform from "./Cartform/Cartform";
import Cartlist from "./Cartlist/Cartlist";
import styles from "./Cartpage.module.scss";
import Summary from "./Summary/Summary";

export default function Cartpage() {
	const dispatch = useDispatch();
	const { items } = useSelector((state) => state.cart);
	const [mounted, setMounted] = useState(false);

	function toggleForm() {
		setMounted(!mounted);
	}

	useEffect(() => {
		const xhr = new XMLHttpRequest();
		xhr.open("GET", "cart.json");
		xhr.addEventListener("load", function () {
			const data = JSON.parse(this.response);
			dispatch(setCartItems(data));
		});
		xhr.addEventListener("error", function () {
			alert("Something went wrong fetching your cart items!");
		});
		xhr.send();
	}, []);

	return (
		<Section>
			<Box className={styles.Cartpage}>
				<Hstack className={styles.header}>
					<h1>CART</h1>
					<Button onClick={toggleForm}>ADD TO CART</Button>
				</Hstack>
				{objToArray(items).reduce((acc, val) => {
					return acc + val.qty;
				}, 0) ? (
					<>
						<Box className={styles.content} align="flex-start" justify="normal">
							<Box className={styles.listcontainer}>
								<Cartlist />
							</Box>
							<Box>
								<Summary />
							</Box>
						</Box>
					</>
				) : (
					<Center style={{ height: "40vh" }}>
						<h2>CART IS EMPTY</h2>
					</Center>
				)}
			</Box>
			{mounted && <Cartform setMounted={setMounted} />}
		</Section>
	);
}
