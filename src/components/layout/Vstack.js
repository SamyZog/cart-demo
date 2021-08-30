import { forwardRef, memo } from "react";
import Box from "./Box";

function Vstack({ children, as, space, align, justify, style, ...props }, ref) {
	return (
		<Box
			ref={ref}
			as={as}
			style={{
				display: "flex",
				alignItems: align || "center",
				justifyContent: justify || "center",
				flexDirection: "column",
				gap: space || "var(--space-lg)",
				...style,
			}}
			{...props}
		>
			{children}
		</Box>
	);
}

export default memo(forwardRef(Vstack));
