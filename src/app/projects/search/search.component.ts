import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IProject } from '../../../common/interfaces';
import { ProjectsService } from '../projects.service';

@Component({
    selector: 'projects',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.css']
})
export class ProjectsSearchComponent {
  public projects: IProject[];
  public suggestions: any;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService) {
  }

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
        let tagsToSearch: string[] = (params.tags) ? params.tags.split('-') : null;

        let query = {};
        let order = ''; // newest first
        if (tagsToSearch) {
          let searchFor = '';
          tagsToSearch.forEach((tag) => {
            if (searchFor !== '') searchFor += ' && ';
            searchFor += `tags:${tag}`;
          });

          query = {
            search: searchFor
          };
        }

        this.projectsService.getProjects(query)
          .subscribe(
            (projects: IProject[]) => {
              this.projects = projects;
            },
            (error: any) => console.error(error)
          );
    });
  }
}