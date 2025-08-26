import { Feature } from '@/types';
import { useForm } from '@inertiajs/react';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
export default function FeatureUpvoteDown({ feature }: { feature: Feature }) {
    const upvoteFrom = useForm({
        upvote: true,
    });
    const downvoteFrom = useForm({
        downvote: true,
    });

    const handleVote = (upvote: boolean) => {
        if ((feature.user_has_upvoted && upvote) || (feature.user_has_downvoted && !upvote)) {
            upvoteFrom.delete(route('upvote.destroy', feature.id), {
                preserveScroll: true,
                onSuccess: () => {
                    downvoteFrom.reset();
                },
            });
        } else {
            let from = null;
            if (upvote) {
                from = upvoteFrom;
            } else {
                from = downvoteFrom;
            }
            from.post(route(upvote ? 'upvote.store' : 'downvote.store', feature.id), {
                preserveScroll: true,
                onSuccess: () => {
                    if (upvote) {
                        downvoteFrom.reset();
                    } else {
                        upvoteFrom.reset();
                    }
                },
            });
        }
    };

    return (
        <div>
            <div className="flex flex-col items-center gap-2">
                <ChevronUpIcon
                    onClick={() => handleVote(true)}
                    className={clsx('cursor-pointer transition-colors hover:text-blue-500', feature?.user_has_upvoted && 'text-amber-600')}
                />
                <span className={clsx('text-sm', feature?.user_has_upvoted && 'text-amber-600', feature?.user_has_downvoted && 'text-amber-600')}>
                    {feature?.upvote_count}
                </span>
                <ChevronDownIcon
                    onClick={() => handleVote(false)}
                    className={clsx('cursor-pointer transition-colors hover:text-blue-500', feature?.user_has_downvoted && 'text-amber-600')}
                />
            </div>
        </div>
    );
}
