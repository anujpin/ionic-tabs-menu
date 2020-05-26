import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
    {
        path: '',
        component: HomePage,
        children: [
            {
                path: 'assignment-menu',
                loadChildren: () =>
                    import('../assignment/tabs-menu/tabs-menu.module').then((m) => m.TabsMenuPageModule),
            },
            {
                path: 'add-assignment',
                loadChildren: () =>
                    import('../assignment/add-assignment/add-assignment.module').then((m) => m.AddAssignmentPageModule),
            },
            {
                path: 'view-assignment',
                loadChildren: () =>
                    import('../assignment/view-assignment/view-assignment.module').then(
                        (m) => m.ViewAssignmentPageModule
                    ),
            },
            {
                path: '',
                loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardPageModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
