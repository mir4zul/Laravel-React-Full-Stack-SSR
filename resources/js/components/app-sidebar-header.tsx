import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { NewButton, type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { Link } from '@inertiajs/react';

export function AppSidebarHeader({ breadcrumbs = [], newButton }: { breadcrumbs?: BreadcrumbItemType[]; newButton?: NewButton }) {
    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            {/* New Button */}
            <div className="rounded-md bg-sidebar-border/80 px-5 py-2 duration-200 ease-in-out hover:bg-sidebar-border">
                <Link className="text-sm font-medium" href={newButton?.href ?? '#'}>
                    {newButton?.name}
                </Link>
            </div>
        </header>
    );
}
