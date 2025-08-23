import { Feature } from '@/types';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useState } from 'react';
export default function FeatureUpvoteDown({ feature }: { feature: Feature }) {
    const [upvotes, setUpvotes] = useState(0);
    const [downvotes, setDownvotes] = useState(0);
    const [userHasUpvoted, setUserHasUpvoted] = useState(false);
    const [userHasDownvoted, setUserHasDownvoted] = useState(false);

    const handleUpvote = () => {
        if (userHasUpvoted) {
            setUpvotes(upvotes - 1);
            setUserHasUpvoted(false);
        } else {
            setUpvotes(upvotes + 1);
            setUserHasUpvoted(true);
            if (userHasDownvoted) {
                setDownvotes(downvotes - 1);
                setUserHasDownvoted(false);
            }
        }
    };

    const handleDownvote = () => {
        if (userHasDownvoted) {
            setDownvotes(downvotes - 1);
            setUserHasDownvoted(false);
        } else {
            setDownvotes(downvotes + 1);
            setUserHasDownvoted(true);
            if (userHasUpvoted) {
                setUpvotes(upvotes - 1);
                setUserHasUpvoted(false);
            }
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center gap-2">
                <ChevronUpIcon
                    onClick={handleUpvote}
                    className={clsx('cursor-pointer transition-colors hover:text-blue-500', feature?.user_has_upvoted && 'text-amber-600')}
                />
                <span className={clsx('text-sm', feature?.user_has_upvoted && 'text-amber-600', feature?.user_has_downvoted && 'text-amber-600')}>
                    {feature?.upvote_count}
                </span>
                <ChevronDownIcon
                    onClick={handleDownvote}
                    className={clsx('cursor-pointer transition-colors hover:text-blue-500', feature?.user_has_downvoted && 'text-amber-600')}
                />
            </div>
        </div>
    );
}
