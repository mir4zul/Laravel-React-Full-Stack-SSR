import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Feature } from '@/types';
import { Head } from '@inertiajs/react';
export default function Show({ feature }: { feature: Feature }) {
    const breadcrumbs: BreadcrumbItem[] = [
        { title: 'Features', href: '/features' },
        { title: feature.name || 'Detail', href: `/features/${feature.id}` },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={feature.name || 'Feature Detail'} />

            <div className="space-y-6 p-6">
                <h1 className="text-2xl font-semibold">{feature.name}</h1>
                <p className="text-gray-400">{feature.description}</p>

                {/* Example: Display feature status or other attributes */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* <div>
                        <span className="text-sm text-gray-500">Status:</span>
                        <div className="text-white">{feature.status}</div>
                    </div> */}
                    <div>
                        <span className="text-sm text-gray-500">Created at:</span>
                        <div className="text-white">{feature.created_at}</div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
