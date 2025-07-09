import { Feature } from '@/types';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useState } from 'react';

export default function FeatureItem({ feature }: { feature: Feature }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Safely handle null/undefined descriptions
    const description = feature?.description || '';
    const shouldShowToggle = description.length > 100;

    return (
        <div className="my-1 flex overflow-hidden rounded-xl bg-border/50 p-4">
            <div className="flex flex-col gap-2">
                <ChevronUpIcon />
                <span>12</span>
                <ChevronDownIcon />
            </div>
            <div className="p-4">
                <p className="font-semibold">{feature?.name}</p>
                <p className="pt-1 text-sm text-muted-foreground">
                    {isExpanded ? description : `${description.substring(0, 350)} ${description.length > 350 ? '...' : ''}`}
                </p>
                {shouldShowToggle && (
                    <button
                        className="cursor-pointer pt-2 text-sm text-chart-1 underline duration-200 ease-in-out hover:text-chart-2"
                        onClick={toggleReadMore}
                    >
                        {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                )}
            </div>
        </div>
    );
}
