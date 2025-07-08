import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Welcome() {
    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
        <>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="save-button"
                        onClick={() => (modalOpen ? close() : open())}
                    >
                        Launch modal
                    </motion.button>
                </div>
            </div>
        </>
    );
}
