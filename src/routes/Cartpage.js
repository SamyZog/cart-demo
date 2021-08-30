import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from "../components/layout/Section";
import { setCartItems } from "../store/cart/cart";
import { objToArray } from "../utils/utils";
import Cartlist from "./Cartlist/Cartlist";

export default function Cartpage() {
	const { items } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const getTotalQty = (acc, val) => {
		return acc + val.qty;
	};

	const getTotalSum = (acc, val) => {
		const total = val.qty * val.price;
		return acc + total;
	};

	const totalQty = objToArray(items).reduce(getTotalQty, 0);

	const totalSum = objToArray(items).reduce(getTotalSum, 0);

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
			<Cartlist />
		</Section>
	);
}
