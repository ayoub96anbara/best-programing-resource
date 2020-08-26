import {Component, ViewEncapsulation} from '@angular/core';

import {fuseAnimations} from '@fuse/animations';

@Component({
    selector     : 'fuse-theme-options',
    templateUrl  : './theme-options.component.html',
    styleUrls    : ['./theme-options.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class FuseThemeOptionsComponent
{}
