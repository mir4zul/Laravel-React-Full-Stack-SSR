import { FramerModal } from '@/components/framerModal';
import { useState } from 'react';

export default function Welcome() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="p-8">
            <button onClick={() => setIsOpen(true)} className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700">
                Open Modal
            </button>

            <FramerModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Modal Title</h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        This is a beautiful modal with Framer Motion animations and Tailwind styling. It has a smooth entrance and exit, backdrop
                        blur, and dark mode support.
                    </p>
                    <div className="flex justify-end space-x-3 pt-4">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </FramerModal>
        </div>
    );
}
