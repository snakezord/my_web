import {motion} from "framer-motion";
import {FC, PropsWithChildren} from "react";

interface AnimateProps extends PropsWithChildren {
	delay?: number
}

const variants = {
	hidden: {opacity: 0, x: 0, y: 20},
	enter: {opacity: 1, x: 0, y: 0},
}

const Animate: FC<AnimateProps> = ({children, delay}) => {
	return (
		<motion.div
			initial="hidden"
			whileInView="enter"
			viewport={{once: true}}
			variants={variants}
			transition={{duration: 0.3, type: 'easeInOut', delay}}
			style={{width: '100%'}}
		>
			{children}
		</motion.div>
	)
}

export default Animate;