import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';

import { FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ContentModule } from 'app/layout/components/content/content.module';
import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { QuickPanelModule } from 'app/layout/components/quick-panel/quick-panel.module';

import { HorizontalLayout1Component } from 'app/layout/horizontal/layout-1/layout-1.component';

@NgModule({
    declarations: [
        HorizontalLayout1Component
    ],
    imports     : [
        MatSidenavModule,

        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        ContentModule,

        NavbarModule,
        QuickPanelModule,

    ],
    exports     : [
        HorizontalLayout1Component
    ]
})
export class HorizontalLayout1Module
{
}
