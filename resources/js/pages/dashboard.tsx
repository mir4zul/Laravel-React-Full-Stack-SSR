import { ChartAreaInteractive } from '@/components/AreaChartsInteractive';
import { ChartBarDefault } from '@/components/chart-bar-default';
import { ChartLineDots } from '@/components/chart-line-dots';
import { ChartRadialLabel } from '@/components/chart-radial-label';
import { DataTable } from '@/components/data-table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

import data from '@/data/data.json';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <ChartBarDefault />
                    <ChartLineDots />
                    <ChartRadialLabel />
                </div>

                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <ChartAreaInteractive />
                </div>

                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 py-8 md:min-h-min dark:border-sidebar-border">
                    <DataTable data={data} />
                </div>
            </div>
        </AppLayout>
    );
}
