import { Feature } from '@/types';
import { Select, SelectContent, SelectItem } from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon, EllipsisVertical } from 'lucide-react';
import { useState } from 'react';

export default function FeatureItem({ feature }: { feature: Feature }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    console.log(isExpanded);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    // Safely handle null/undefined descriptions
    const description = feature?.description || '';
    const shouldShowToggle = description.length > 350;

    return (
        <div className="my-1 flex justify-between overflow-hidden rounded-xl bg-border/50 p-4">
            <div className="flex flex-col gap-2">
                <ChevronUpIcon />
                <span>12</span>
                <ChevronDownIcon />
            </div>
            <div className="w-full p-4">
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

            <div className="">
                <EllipsisVertical onClick={() => setIsOpen(!isOpen)} className="h-4 w-4 cursor-pointer" />

                <Select open={isOpen} onValueChange={(value) => console.log(value)} onOpenChange={setIsOpen} defaultValue="outline">
                    <SelectContent
                        side="left"
                        align="start"
                        sideOffset={5}
                        className="rounded-md border border-slate-700 bg-slate-800 text-white shadow-md"
                    >
                        <SelectItem value="outline">Outline</SelectItem>
                        <SelectItem value="past-performance">Past Performance</SelectItem>
                        <SelectItem value="key-personnel">Key Personnel</SelectItem>
                        <SelectItem value="focus-documents">Focus Documents</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
