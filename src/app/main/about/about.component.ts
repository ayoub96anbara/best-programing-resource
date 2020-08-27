import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';



@Component({
    selector   : 'sample',
    templateUrl: './about.component.html',
    styleUrls  : ['./about.component.scss']
})
export class AboutComponent
{

    constructor(private titleService:Title) {
        this.titleService.setTitle("About");
    }

}
