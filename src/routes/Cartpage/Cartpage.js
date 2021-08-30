import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Button from "../../components/action/Button/Button";
import Box from "../../components/layout/Box";
import Hstack from "../../components/layout/Hstack";
import Section from "../../components/layout/Section";
import { setCartItems } from "../../store/cart/cart";
import Cartlist from "./Cartlist/Cartlist";
import styles from "./Cartpage.module.scss";
import Summary from "./Summary/Summary";

export default function Cartpage() {
	const dispatch = useDispatch();

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
					<Button>ADD TO CART</Button>
				</Hstack>
				<Box className={styles.content} align="flex-start" justify="normal">
					<Box className={styles.listcontainer}>
						<Cartlist />
					</Box>
					<Box>
						<Summary />
					</Box>
				</Box>
			</Box>
		</Section>
	);
}
