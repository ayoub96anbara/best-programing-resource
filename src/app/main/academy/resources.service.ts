import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable()
export class AcademyResourcesService {


    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(
        private _httpClient: HttpClient
    ) {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------


    /**
     * Get categories
     *
     * @returns {Observable<any>}
     */
    getCategories(): Observable<any> {
        return of(this.categories);
    }

    /**
     * Get resources
     *
     * @returns {Observable<any>}
     */
    getCourses(): Observable<any> {
        return of(this.resources);
    }

    private resources = [
        {
            'title': 'Durga',
            'categories': ['java_ecosystem', 'angular_ecosystem','linux','docker'],
            'description': 'java spring maven jee angular javascript typescript webpack linux docker',
            'link_img': 'https://yt3.ggpht.com/a/AATXAJxKjte_UQozf39SBZOvlz0zsGMoW1VT9azr-koX0w=s100-c-k-c0xffffffff-no-rj-mo',
            'link_resource': 'https://www.youtube.com/user/durgasoftware',
            'theme': 'theme1'
        },
        {
            'title': 'Mohamed youssfi',
            'categories': ['java_ecosystem','angular_ecosystem','docker'],
            'description': 'java spring maven jee angular docker',
            'link_img': 'https://yt3.ggpht.com/a/AATXAJwAF3-0JzaTTs7poZvMNa2n3T2Q34CeBNTrfhnP=s100-c-k-c0xffffffff-no-rj-mo',
            'link_resource': 'https://www.youtube.com/channel/UCCwIYNpQVHZTd3Vx_krnmdA',
            'theme': 'theme1'
        },
        {
            'title': 'Laurentiu Spilca',
            'categories': ['java_ecosystem'],
            'description': 'java spring ',
            'link_img': 'https://yt3.ggpht.com/a/AATXAJz6R3H1IR7bXsBXPz4QsbjttRjyx5Q5fVaw4V6e=s100-c-k-c0xffffffff-no-rj-mo',
            'link_resource': 'https://www.youtube.com/channel/UC0z3MpVGrpSZzClXrYcZBfw',
            'theme': 'theme1'
        },
        {
            'title': 'Spring Guides',
            'categories': ['java_ecosystem'],
            'description': 'spring Documentation',
            'link_img': 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg',
            'link_resource': 'https://spring.io/guides',
            'theme': 'theme1'
        },
        {
            'title': 'Angular Guides',
            'categories': ['angular_ecosystem'],
            'description': 'Angular Documentation',
            'link_img': 'https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png',
            'link_resource': 'https://angular.io/docs',
            'theme': 'theme1'
        },
        {
            'title': 'Telusko',
            'categories': ['java_ecosystem'],
            'description': 'java spring jee',
            'link_img': 'https://yt3.ggpht.com/a/AATXAJxDrD6psghJpCmLtxsJjmOKkEzgoJFnClh1wgC2=s100-c-k-c0xffffffff-no-rj-mo',
            'link_resource': 'https://www.youtube.com/user/javaboynavin',
            'theme': 'theme1'
        }
        ,
        {

            'title': 'Claude Delannoy',
            'categories': ['books'],
            'description': 'java c c++ ',
            'link_img': 'https://images-na.ssl-images-amazon.com/images/I/71HoQfs2OcL.SR160,240_BG243,243,243.jpg',
            'link_resource': 'https://www.amazon.com/Claude-Delannoy/e/B004MZKINI/ref=dp_byline_cont_book_1',
            'theme': 'books'
        },
        {

            'title': 'Oracle Certified Java',
            'categories': ['books'],
            'description': 'java  ',
            'link_img': 'https://images-na.ssl-images-amazon.com/images/I/51FzqDL+1QL._SX397_BO1,204,203,200_.jpg',
            'link_resource': 'https://www.amazon.com/OCP-Certified-Professional-Programmer-1Z0-809/dp/1119067901/ref=sr_1_3?dchild=1&keywords=ocp+java&qid=1598457414&sr=8-3',
            'theme': 'books'
        },
        {

            'title': 'null++',
            'categories': ['podcasts'],
            'description': 'Arabic podcast  nullplus',
            'link_img': '../../../assets/images/logos/nullplus.jpg',
            'link_resource': 'https://nullplus.plus/',
            'theme': 'podcasts'
        }
        ,{

            'title': 'geeksblabla',
            'categories': ['podcasts'],
            'description': 'Morocco podcasts  ',
            'link_img': 'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/1335362/1335362-1581904175864-b7e27cc8d1ff5.jpg',
            'link_resource': 'https://geeksblabla.com/',
            'theme': 'podcasts'
        },{

            'title': 'Mohamed Elsherif',
            'categories': ['podcasts'],
            'description': 'Arabic podcasts  ',
            'link_img': 'https://yt3.ggpht.com/a/AATXAJwVUY3Ks-kwSZYCTv9F-11vdReJP7UQ1iT0PX3dDAk=s100-c-k-c0xffffffff-no-rj-mo',
            'link_resource': 'https://www.youtube.com/user/bashmohandes',
            'theme': 'podcasts'
        }
        ,{

            'title': 'الجامعة الإسلامية بغزة',
            'categories': ['java_ecosystem'],
            'description': 'java python   ',
            'link_img': 'https://yt3.ggpht.com/a/AATXAJxsfVhB2yK2MAPEM5qSFMQlsEq1g2GzD3sbzMf2fQ=s100-c-k-c0xffffffff-no-rj-mo',
            'link_resource': 'https://www.youtube.com/watch?v=lNWXoBFJR5I&list=PL9fwy3NUQKwY0C3IW_K2YLh0CsbvHZGxH',
            'theme': 'theme1'
        }
        ,{

            'title': 'Abdullah Almehmadi',
            'categories': ['java_ecosystem'],
            'description': 'java javascript   ',
            'link_img': 'https://yt3.ggpht.com/a/AATXAJwXlA1gqpLzZrqSsQE3BMYaHvuVnQ5Sn45Y5jcb=s100-c-k-c0xffffffff-no-rj-mo',
            'link_resource': 'https://www.youtube.com/user/abdullaheidtv',
            'theme': 'theme1'
        },
        {

            'title': 'Facebook Developer Circle: Casablanca',
            'categories': ['facebook'],
            'description': 'group facebook   ',
            'link_img': 'https://avatars1.githubusercontent.com/u/34286299?s=280&v=4',
            'link_resource': 'https://www.facebook.com/groups/DevC.Casablanca/?multi_permalinks=1123433241391985&notif_id=1598447856643038&notif_t=group_highlights&ref=notif',
            'theme': 'facebook'
        },
        {

            'title': 'Egyptian Geeks',
            'categories': ['facebook'],
            'description': 'group facebook Egyptian Geeks  ',
            'link_img': '../../../assets/images/logos/facebook.png',
            'link_resource': 'https://www.facebook.com/groups/egyptian.geeks',
            
            'theme': 'facebook'
        },
        {

            'title': 'pentium',
            'categories': ['podcasts'],
            'description': 'Morocco podcasts  ',
            'link_img': 'https://pentium.live/static/media/pentium-logo.4b0953b2.jpg',
            'link_resource': 'https://pentium.live/',
            
            'theme': 'podcasts'
        }
        ,{

            'title': 'Podcasts Angular',
            'categories': ['podcasts'],
            'description': 'Podcasts suggested by the angular team',
            'link_img': '../../../assets/images/logos/podcast_ang.png',
            'link_resource': 'https://angular.io/resources?category=community',

            'theme': 'podcasts'
        }
        ,
        {

            'title': 'Egyptian Developers Comedy',
            'categories': ['facebook'],
            'description': 'group facebook Comedy  ',
            'link_img': '../../../assets/images/logos/facebook.png',
            'link_resource': 'https://www.facebook.com/groups/259248171516264',
            
            'theme': 'facebook'
        },
        {

            'title': 'ForLoopII',
            'categories': ['facebook'],
            'description': 'page facebook Comedy  ',
            'link_img': '../../../assets/images/logos/facebook.png',
            'link_resource': 'https://www.facebook.com/ForLoopII',
            
            'theme': 'facebook'
        },
        {

            'title': 'article about Spring',
            'categories': ['java_ecosystem'],
            'description': 'article was written by Zakariae Bou about Spring  ',
            'link_img': 'https://scontent.fcmn2-1.fna.fbcdn.net/v/t1.0-9/78056869_2476742005756726_2125708039255228416_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=6R5CQ19Mz2gAX_GdHNO&_nc_ht=scontent.fcmn2-1.fna&oh=e1d382b1dc0fac4957cd2e59e41af83d&oe=5F6BF62F',
            'link_resource': 'https://www.facebook.com/groups/DevC.Casablanca/?post_id=913190782416233',
            
            'theme': 'facebook'
        },
        {

            'title': 'best Angular Components & Libraries',
            'categories': ['angular_ecosystem'],
            'description': 'catalog on github that groups the best angular components & libraries ',
            'link_img': 'https://colorlib.com/wp/wp-content/uploads/sites/2/angular-logo.png',
            'link_resource': 'https://github.com/brillout/awesome-angular-components',
            
            'theme': 'theme1'
        },
        {

            'title': 'SpringDeveloper',
            'categories': ['java_ecosystem'],
            'description': 'channel youtube that explains Spring',
            'link_img': 'https://yt3.ggpht.com/a/AATXAJzkgENZq4qkJNVQ4JJ8e-evEXcWnJjaR-i926k9=s100-c-k-c0xffffffff-no-rj-mo',
            'link_resource': 'https://www.youtube.com/user/SpringSourceDev/featured',

            'theme': 'theme1'
        },
        {

            'title': 'SpringDeveloper',
            'categories': ['java_ecosystem'],
            'description': 'channel youtube that explains Spring, Hibernate ',
            'link_img': 'https://yt3.ggpht.com/a/AATXAJxTooqWNd6_pMTCpswVj41pi9cnFU6ZhhulTJXT=s100-c-k-c0xffffffff-no-rj-mo',
            'link_resource': 'https://www.youtube.com/c/NareshIT/playlists',

            'theme': 'theme1'
        }
    ];

    private categories = [
        {
            'id': 0,
            'value': 'java_ecosystem',
            'label': 'Java Ecosystem'
        },
        {
            'id': 1,
            'value': 'angular_ecosystem',
            'label': 'Angular Ecosystem'
        },
        {
            'id': 4,
            'value': 'podcasts',
            'label': 'Podcasts'
        },
        {
            'id': 5,
            'value': 'facebook',
            'label': 'Facebook Community'
        },
        {
            'id': 6,
            'value': 'linux',
            'label': 'Linux'
        },
        {
            'id': 7,
            'value': 'docker',
            'label': 'Docker'
        },
        {
            'id': 8,
            'value': 'books',
            'label': 'Books'
        },
        {
            'id': 9,
            'value': 'english',
            'label': 'English'
        },
        {
            'id': 10,
            'value': 'networking_basics',
            'label': 'Networking Basics'
        }
    ];
}
