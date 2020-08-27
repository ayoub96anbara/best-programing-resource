import { Component, ViewEncapsulation } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector     : 'error-404',
    templateUrl  : './error-404.component.html',
    styleUrls    : ['./error-404.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Error404Component
{
    /**
     * Constructor
     */
    constructor(private titleService:Title)
    {
this.titleService.setTitle("404")
    }
}
