import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import Create from '@/pages/Feature/Create';
import { type BreadcrumbItem as BreadcrumbItemType } from '@/types';
import { useState } from 'react';
import { FramerModal } from './framerModal';

export function AppSidebarHeader({ breadcrumbs = [] }: { breadcrumbs?: BreadcrumbItemType[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            {/* New Button */}
            <div className="rounded-md bg-sidebar-border/80 px-5 py-2 duration-200 ease-in-out hover:bg-sidebar-border">
                <button onClick={() => setIsOpen(true)} className="text-sm font-medium">
                    New Feature
                </button>
            </div>

            {/* Open Modal */}
            <FramerModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <Create />
            </FramerModal>
        </header>
    );
}
