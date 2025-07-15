import { FramerDropdown } from '@/components/ui/framerDropdown';
import { Feature } from '@/types';
import { useForm } from '@inertiajs/react';
import { EllipsisVertical } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function DropdownMenuTrigger({ feature, setModal }: { feature: Feature; setModal: (value: boolean) => void }) {
    const { delete: destroy } = useForm();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    const dropdownItems = [
        {
            label: 'Edit',
            onClick: () => {
                setModal(true);
            },
        },
        {
            label: 'Show',
            onClick: () => {
                window.location.href = `/features/${feature?.id}`;
            },
        },
        {
            label: 'Delete',
            onClick: () => {
                destroy(route('features.destroy', feature?.id));
            },
        },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Lock scroll when dropdown is open
    useEffect(() => {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        if (isDropdownOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isDropdownOpen]);

    return (
        <>
            <div ref={dropdownRef}>
                <EllipsisVertical onClick={toggleDropdown} className="h-5 w-5 cursor-pointer text-gray-300 hover:text-white" />

                <FramerDropdown isOpen={isDropdownOpen}>
                    {dropdownItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                item.onClick();
                                setIsDropdownOpen(false);
                            }}
                            className={`w-full cursor-pointer px-4 py-2 text-left text-sm text-gray-200 transition ${
                                item.label.toLowerCase() === 'delete'
                                    ? 'border text-gray-950 hover:bg-red-500/30 hover:text-white'
                                    : 'hover:bg-[#2a2a2a]'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </FramerDropdown>
            </div>
        </>
    );
}
