import {motion} from "framer-motion";
import {FC, PropsWithChildren} from "react";

interface ContentLayoutProps extends PropsWithChildren {
	delay?: number
}

const variants = {
	hidden: {opacity: 0, x: 0, y: 20},
	enter: {opacity: 1, x: 0, y: 0},
}

const ContentLayout: FC<ContentLayoutProps> = ({children, delay}) => {
	return (
		<motion.div
			initial="hidden"
			animate="enter"
			variants={variants}
			transition={{duration: 0.3, type: 'easeInOut', delay}}
		>
			{children}
		</motion.div>
	)
}

export default ContentLayout;