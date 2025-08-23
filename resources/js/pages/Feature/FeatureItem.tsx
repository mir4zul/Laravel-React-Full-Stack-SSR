import FeatureUpvoteDown from '@/components/FeatureUpvoteDown';
import { FramerModal } from '@/components/framerModal';
import { Feature } from '@/types';
import { useState } from 'react';
import Edit from './Edit';
import DropdownMenuTrigger from './dropdown-menu-trigger';

export default function FeatureItem({ feature }: { feature: Feature }) {
    const [modal, setModal] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const toggleReadMore = () => setIsExpanded(!isExpanded);

    const description = feature?.description || '';
    const shouldShowToggle = description.length > 350;

    console.log('FeatureItem rendered', feature);

    return (
        <div className="my-1 flex justify-between overflow-hidden rounded-xl bg-border/50 p-4">
            {/* Upvote/Downvote */}
            {/* <div className="flex flex-col items-center gap-2">
                <ChevronUpIcon
                    className={clsx('cursor-pointer transition-colors hover:text-blue-500', feature?.user_has_upvoted && 'text-amber-600')}
                />
                <span className={clsx('text-sm', feature?.user_has_upvoted && 'text-amber-600', feature?.user_has_downvoted && 'text-amber-600')}>
                    {feature?.upvote_count}
                </span>
                <ChevronDownIcon
                    className={clsx('cursor-pointer transition-colors hover:text-blue-500', feature?.user_has_downvoted && 'text-amber-600')}
                />
            </div> */}
            <FeatureUpvoteDown feature={feature} />

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

            {/* Dropdown Menu Trigger */}
            <DropdownMenuTrigger feature={feature} setModal={setModal} />

            {/* Modal for Edit */}
            {modal && (
                <FramerModal isOpen={modal} onClose={() => setModal(false)}>
                    <Edit feature={feature} onClose={() => setModal(false)} />
                </FramerModal>
            )}
        </div>
    );
}
