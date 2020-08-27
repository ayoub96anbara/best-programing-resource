import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import 'hammerjs';

import {FuseModule} from '@fuse/fuse.module';
import {FuseSharedModule} from '@fuse/shared.module';
import {FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule} from '@fuse/components';

import {fuseConfig} from 'app/fuse-config';

import {AppComponent} from 'app/app.component';
import {LayoutModule} from 'app/layout/layout.module';
import {AboutModule} from 'app/main/about/about.module';
import {AcademyModule} from './main/academy/academy.module';
import {Error500Module} from './main/errors/500/error-500.module';
import {Error404Component} from './main/errors/404/error-404.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

const appRoutes: Routes = [
    {
        path: 'about',
        loadChildren: () => import('./main/about/about.module').then(m => m.AboutModule)
    },
    {
        path: '',
        redirectTo: 'academy',
        pathMatch: 'full'
    },
    {
        path: 'academy',
        loadChildren: () => import('./main/academy/academy.module').then(m => m.AcademyModule)
    },
    {
        path: 'error-404',
        // path     : '**',
        component: Error404Component
    },
    {

        path: '**',
        component: Error404Component
    },
];

@NgModule({
    declarations: [
        AppComponent,
        Error404Component
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        MatIconModule,
        // App modules
        LayoutModule,
        AboutModule,
        AcademyModule,

        Error500Module
    ],
    providers: [
        {useClass: HashLocationStrategy, provide: LocationStrategy}
    ]
    ,
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
