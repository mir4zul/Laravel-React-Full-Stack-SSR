import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function SuccessMessage() {
    const { success } = usePage<{ success?: string }>().props;
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    // Sync success prop to local state when it changes
    useEffect(() => {
        if (typeof success === 'string') {
            setSuccessMessage(success);

            const timer = setTimeout(() => {
                setSuccessMessage(null); // Clear the message after 2 seconds
            }, 2000);

            return () => clearTimeout(timer); // Cleanup on unmount or when new success comes in
        }
    }, [success]);

    if (!successMessage) return null;

    return <div className="text-green-800 shadow transition-opacity duration-300">{successMessage}</div>;
}
