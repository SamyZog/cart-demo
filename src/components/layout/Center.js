import { forwardRef, memo } from "react";
import Box from "./Box";

function Center({ children, as, style, ...props }, ref) {
	return (
		<Box
			style={{ display: "flex", justifyContent: "center", alignItems: "center", ...style }}
			ref={ref}
			as={as}
			{...props}
		>
			{children}
		</Box>
	);
}

export default memo(forwardRef(Center));
