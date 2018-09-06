import { Routes, RouterModule } from "@angular/router";


export const appRoutes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', loadChildren: '@angular-nrwl-demo/user#UserModule'
    }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes, {useHash: true});