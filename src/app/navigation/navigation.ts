import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [


            {
                id       : 'about',
                title    : 'About',
                translate: 'NAV.ABOUT.TITLE',
                type     : 'item',
                icon     : 'info',
                url      : '/about',
            },
            {
                id       : 'academy',
                title    : 'Academy',
                translate: 'NAV.ACADEMY',
                type     : 'item',
                icon     : 'school',
                url      : '/academy'
            }


];
