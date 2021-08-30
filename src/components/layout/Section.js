import Box from "./Box";

function Section({ children, ...props }) {
	return (
		<Box
			as="section"
			style={{
				height: "90vh",
				width: "100%",
				maxWidth: "var(--desktop)",
				padding: "var(--space-lg)",
				alignItems: "stretch",
			}}
			{...props}
		>
			{children}
		</Box>
	);
}

export default Section;
