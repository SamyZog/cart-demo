import Center from "./Center";

function Section({ children, ...props }) {
	return (
		<Center
			as="section"
			style={{ minHeight: "100vh", width: "100%", maxWidth: "var(--desktop)", padding: "var(--space-lg)" }}
			{...props}
		>
			{children}
		</Center>
	);
}

export default Section;
