import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { NewButton, type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
    newButton?: NewButton;
}

export default ({ children, breadcrumbs, newButton, ...props }: AppLayoutProps) => (
    <AppLayoutTemplate newButton={newButton} breadcrumbs={breadcrumbs} {...props}>
        {children}
    </AppLayoutTemplate>
);
