import { FramerDropdown } from '@/components/ui/framerDropdown';
import { Feature } from '@/types';
import { useForm } from '@inertiajs/react';
import { ChevronDownIcon, ChevronUpIcon, EllipsisVertical } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function FeatureItem({ feature }: { feature: Feature }) {
    const { delete: destroy, processing } = useForm();

    const [isExpanded, setIsExpanded] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const description = feature?.description || '';
    const shouldShowToggle = description.length > 350;

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

    const dropdownItems = [
        {
            label: 'Edit',
            onClick: () => {
                window.location.href = `/features/${feature?.id}/show`;
            },
        },
        { label: 'Show', onClick: () => alert('show') },
        { label: 'Delete', onClick: () => {} },
    ];

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="my-1 flex justify-between overflow-hidden rounded-xl bg-border/50 p-4">
            {/* Upvote/Downvote */}
            <div className="flex flex-col items-center gap-2">
                <ChevronUpIcon className="cursor-pointer transition-colors hover:text-blue-500" />
                <span>12</span>
                <ChevronDownIcon className="cursor-pointer transition-colors hover:text-blue-500" />
            </div>

            {/* Content */}
            <div className="w-full px-4">
                <div className="flex justify-between">
                    <p className="font-semibold">{feature?.name}</p>
                </div>
                <p className="pt-1 text-sm text-muted-foreground">
                    {isExpanded ? description : `${description.substring(0, 350)}${description.length > 350 ? '...' : ''}`}
                </p>
                {shouldShowToggle && (
                    <button className="cursor-pointer pt-2 text-sm text-blue-500 underline hover:text-blue-400" onClick={toggleReadMore}>
                        {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                )}
            </div>

            {/* Dropdown */}
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
                                    ? 'border text-gray-950 hover:bg-red-500 hover:text-white'
                                    : 'hover:bg-[#2a2a2a]'
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </FramerDropdown>
            </div>
        </div>
    );
}
