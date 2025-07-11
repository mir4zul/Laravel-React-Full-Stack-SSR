// FramerDropdown.tsx
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FramerDropdownProps {
  isOpen: boolean;
  children: ReactNode;
}

export const FramerDropdown = ({ isOpen, children }: FramerDropdownProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="absolute right-10 mt-2 w-32 rounded-md bg-[#1f1f1f] shadow-lg z-[9999] border border-[#333]"
        >
          <div className="py-1">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
