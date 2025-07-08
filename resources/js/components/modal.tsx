import { motion } from 'framer-motion';
import Backdrop from './backdrop';

const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.1,
            type: 'spring' as const,
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
};

export const Modal = ({ handleClose, text }: { handleClose: () => void; text: string }) => {
    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                className="modal orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <p>{text}</p>
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    );
};
