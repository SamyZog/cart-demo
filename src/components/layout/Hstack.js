import { forwardRef, memo } from "react";
import Box from "./Box";

function Hstack({ children, as, style, justify, align, space, ...props }, ref) {
	return (
		<Box
			ref={ref}
			as={as}
			style={{
				display: "flex",
				justifyContent: justify || "space-between",
				alignItems: align || "center",
				gap: space || "var(--space-lg)",
				...style,
			}}
			{...props}
		>
			{children}
		</Box>
	);
}

export default memo(forwardRef(Hstack));
