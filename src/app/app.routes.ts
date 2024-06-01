import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'nextplay',pathMatch:'full'
    },
    {

        path:'nextplay',component:LayoutComponent,
        children:[
            {
                path:'',loadChildren:() => import('./layout/components/layout/layout.component').then(c => c.layoutRoutes)
            }
        ]
    }
];
