import { forwardRef, memo } from "react";

function Box({ children, as, style, ...props }, ref) {
	let Comp = as || "div";

	return (
		<Comp style={{ padding: "var(--space-lg)", ...style }} ref={ref} {...props}>
			{children}
		</Comp>
	);
}

export default memo(forwardRef(Box));
