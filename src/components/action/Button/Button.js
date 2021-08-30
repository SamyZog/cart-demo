import { forwardRef, memo } from "react";
import styles from "./Button.module.scss";

function Button({ children, as: As, leftIcon: LeftIcon, rightIcon: RightIcon, ...props }, ref) {
	return (
		<button ref={ref} className={styles.BaseButton} {...props}>
			{LeftIcon ? <LeftIcon /> : null}
			{children}
			{RightIcon ? <RightIcon /> : null}
		</button>
	);
}

export default memo(forwardRef(Button));
