import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FuseSharedModule } from '@fuse/shared.module';

import { AcademyCoursesComponent } from 'app/main/academy/courses/courses.component';
import { AcademyResourcesService } from 'app/main/academy/resources.service';
import { FuseSidebarModule } from '@fuse/components';

const routes = [
    {
        path     : 'courses',
        component: AcademyCoursesComponent,
    },

    {
        path      : '**',
        redirectTo: 'courses'
    }
];

@NgModule({
    declarations: [
        AcademyCoursesComponent,

    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,

        FuseSharedModule,
        FuseSidebarModule
    ],
    providers   : [
        AcademyResourcesService,
    ]
})
export class AcademyModule
{
}
