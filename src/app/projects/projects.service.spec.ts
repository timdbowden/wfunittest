import { TestBed, inject } from '@angular/core/testing';

import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectsService]
    });
  });

  it('should create...', inject([ProjectsService], (service: ProjectsService) => {
    expect(service).toBeTruthy();
  }));
  it('should get 7 projects', inject([ProjectsService], (service: ProjectsService) => {
    service.getProjects().subscribe((projects) => {
      expect(projects.length).toEqual(7);
    })
  }));
});
