import AppLayout from '@/layouts/app-layout';
import { Feature, NewButton, PaginatedData, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import FeatureItem from './FeatureItem';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Features',
        href: '/features',
    },
];

const newButton: NewButton = {
    name: 'New Feature',
};

export default function Index({ features }: { features: PaginatedData<Feature> }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs} newButton={newButton}>
            <Head title="Features" />

            <div className="relative flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {features.data.map((feature) => (
                    <FeatureItem key={feature.id} feature={feature} />
                ))}
            </div>
        </AppLayout>
    );
}
