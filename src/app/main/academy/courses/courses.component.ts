import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';

import { AcademyResourcesService } from 'app/main/academy/resources.service';
import {Title} from '@angular/platform-browser';

@Component({
    selector   : 'academy-courses',
    templateUrl: './courses.component.html',
    styleUrls  : ['./courses.component.scss'],
    animations : fuseAnimations
})
export class AcademyCoursesComponent implements OnInit, OnDestroy
{
    categories: any[];
    resources: any[];
    resourcesFilteredByCategory: any[];
    filteredResources: any[];
    currentCategory: string;
    searchTerm: string;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {AcademyResourcesService} _academyCoursesService
     */
    constructor(
        private _academyCoursesService: AcademyResourcesService,
       private titleService:Title
    )
    {
        this.titleService.setTitle("Academy");
        // Set the defaults
        this.currentCategory = 'all';
        this.searchTerm = '';

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to categories
        this._academyCoursesService.getCategories()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(categories => {
                this.categories = categories;
            });

        // Subscribe to courses
        this._academyCoursesService.getCourses()
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(courses => {
                this.filteredResources = this.resourcesFilteredByCategory = this.resources = courses;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter resources by category
     */
    filterResourcesByCategory(): void
    {
        // Filter
        if ( this.currentCategory === 'all' )
        {
            this.resourcesFilteredByCategory = this.resources;
            this.filteredResources = this.resources;
        }
        else
        {
            this.resourcesFilteredByCategory = this.resources.filter(
                (course) => {

                    return course.categories.indexOf(this.currentCategory) != -1 ;
                    /*
                    course.categories.forEach(
                        element =>
                        {
                            console.log(element === this.currentCategory);
                            //'categories': ['java_ecosystem', 'angular_ecosystem'],
                            return element === this.currentCategory;
                        } )
*/
            });

            this.filteredResources = [...this.resourcesFilteredByCategory];

        }

        // Re-filter by search term
        this.filterResourcesByTerm();
    }

    /**
     * Filter resources by term
     */
    filterResourcesByTerm(): void
    {
        const searchTerm = this.searchTerm.toLowerCase();

        // Search
        if ( searchTerm === '' )
        {
            this.filteredResources = this.resourcesFilteredByCategory;
        }
        else
        {
            this.filteredResources = this.resourcesFilteredByCategory.filter((course) => {
                return course.description.toLowerCase().includes(searchTerm);
            });
        }
    }
}
