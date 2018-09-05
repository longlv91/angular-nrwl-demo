import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";


export const appRoutes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', loadChildren: './component/user-management/user-management.module#UserManagementModule'
    }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes, {useHash: true});