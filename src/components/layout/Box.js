import { forwardRef, memo } from "react";

function Box({ children, as, ...props }, ref) {
	let Comp = as || "div";

	return (
		<Comp ref={ref} {...props}>
			{children}
		</Comp>
	);
}

export default memo(forwardRef(Box));
