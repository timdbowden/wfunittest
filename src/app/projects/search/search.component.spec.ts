import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { RouterTestingModule, SpyNgModuleFactoryLoader } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { ProjectsService } from '../projects.service';
import { IProject } from '../../../common/interfaces';

// Component under test
import { ProjectsSearchComponent } from './search.component';

const appRoutes: Routes = [
  { path: '', component: ProjectsSearchComponent }
  // { path: '**', component: PageNotFoundComponent }
];

describe('ProjectsSearchComponent', () => {
  let component: ProjectsSearchComponent;
  let fixture: ComponentFixture<ProjectsSearchComponent>;

  beforeEach(async(() => {
    console.log('TestBed');
    TestBed.configureTestingModule({
      providers:[ 
          {
            provide: ProjectsService, 
            useClass: mockProjectService
          }, 
          {
            provide: ActivatedRoute,
            useClass: mockActivatedRoute
          }
      ],
      declarations: [ ProjectsSearchComponent ],
      schemas: [ NO_ERRORS_SCHEMA ], 
      imports: [ RouterTestingModule ]
    })
    .compileComponents();
    
  }));

   beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsSearchComponent);
    //component = new ProjectsSearchComponent(new mockActivatedRoute(), new mockProjectService());
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should use query tags to search'),async(()=> {
  //  let ps = new mockProjectService();
  //  spyOn(ps, 'getProjects');
  //   //component = new ProjectsSearchComponent(new mockActivatedRoute(), ps);
  //   component.ngOnInit()
  // }), 
  // (done : any) => expect(true).toHaveBeenCalledWith({
  //           search: 'tags:test1 && tags:test2'
  // });
});

//@Injectable()
class mockProjectService {
    getProjects(query: any = {}){
        return Observable.of(mockprojects);
    }

}

//@Injectable()
class mockActivatedRoute  {
    queryParams = Observable.of({tags: "test1-test2"});
    constructor() {
        
    }
}

const mockprojects: IProject[] = <IProject[]>[
  {
    "id": 1,
    "title": "Consequatur est quia hic harum ullam mollitia non fugit molestias.",
    "description": "Molestiae ut eos nobis hic aspernatur sed occaecati. Est culpa ratione deleniti aliquid aut sint. Molestiae quis fugiat est debitis ut et non quasi. Expedita omnis iure vel. Quas animi autem animi ipsum tempore et nostrum voluptas. Voluptas dolore iusto et.\n \rAd similique quia. Quibusdam ratione sunt eligendi in omnis et voluptatem. Error omnis tempore dolorem iste quod et. Omnis temporibus eaque nisi enim et.\n \rMolestiae libero corrupti. Dolorem doloremque quasi minima praesentium necessitatibus non rerum magni assumenda. Aut eos voluptates. Qui aut nobis at optio libero hic. Voluptatem cupiditate velit. Reiciendis minima adipisci ipsum quisquam.",
    "datePosted": new Date("2017-03-08T20:57:16.185Z"),
    "budget": 870.41,
    "currency": "New Leu",
    "targetDate": new Date("2017-04-20T10:39:34.575Z"),
    "tags": "Lari",
    "companyId": 2
  },
  {
    "id": 2,
    "title": "Provident voluptatum voluptatem exercitationem aut in mollitia nulla temporibus dolores.",
    "datePosted": "2016-11-23T15:14:29.575Z",
    "budget": 586.09,
    "targetDate": new Date("2017-03-04T02:16:40.514Z"),
    "tags": "Lock Beauty",
    "companyId": 1
  },
  {
    "id": 3,
    "title": "Sit id aliquid.",
    "description": "Repellat quis nobis ea ut molestias voluptate doloremque perferendis rerum. Qui voluptatem nam fugiat. Voluptatem sed mollitia ad. Alias totam aspernatur est a doloribus voluptatem qui eos alias. Et illum repudiandae laborum quidem deleniti magni. Voluptate aliquam non.\n \rQuibusdam dolor laboriosam harum repudiandae molestias quia inventore. Quisquam perspiciatis officiis. Dolor recusandae autem. Voluptatem ullam non beatae necessitatibus in quos.\n \rFacere possimus numquam mollitia sequi. Quaerat in id occaecati dignissimos et voluptatem modi sit. Nulla nesciunt et id et. Eos consequatur a modi ratione. Repellat quia velit quia optio cumque est sit.",
    "datePosted": new Date("2016-07-27T16:56:27.432Z"),
    "budget": 546.55,
    "currency": "Dobra",
    "targetDate": "2017-05-10T07:47:28.365Z",
    "tags": "next-generation Movies Squares",
    "companyId": 1
  },
  {
    "id": 4,
    "title": "Facere voluptas consequatur tempore aut perspiciatis eum consequatur.",
    "datePosted": new Date("2016-10-30T19:43:45.452Z"),
    "budget": 360.54,
    "targetDate": new Date("2017-01-12T16:44:45.128Z"),
    "companyId": 5
  },
  {
    "id": 5,
    "title": "Saepe autem dolor.",
    "datePosted": new Date("2016-08-15T04:07:36.793Z"),
    "currency": "Swiss Franc",
    "targetDate": new Date("2017-05-09T11:36:18.968Z"),
    "companyId": 1
  },
  {
    "id": 6,
    "title": "Et porro molestiae libero non fuga.",
    "description": "Nemo eos consequuntur et aut voluptatibus. Omnis nostrum delectus dignissimos et nisi enim qui. A eos labore. Voluptatem et quasi consectetur non et.\n \rQuae quasi porro quasi. Enim repellendus dolor quos animi. Ut non similique.\n \rUt commodi magnam est qui qui. In praesentium perferendis veniam tempore quod aliquam distinctio. Facilis exercitationem cumque libero et impedit. Facilis rerum dignissimos aut inventore nam. Reprehenderit omnis neque voluptatem et culpa sunt et architecto.",
    "datePosted": new Date("2016-11-11T15:23:39.349Z"),
    "budget": 269.01,
    "currency": "Algerian Dinar",
    "targetDate": new Date("2017-01-01T20:42:58.440Z"),
    "tags": "Branding",
    "companyId": 1
  },
  {
    "id": 7,
    "title": "Itaque nihil expedita id.",
    "currency": "Sudanese Pound",
    "targetDate": new Date("2017-05-11T13:55:22.711Z"),
    "tags": "compressing plug-and-play",
    "companyId": 4
  }
]