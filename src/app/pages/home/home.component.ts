import { Component, OnInit } from '@angular/core';
import { MenuComponent } from 'src/app/shared/menu/menu.component'
import { Project } from './project';
import { ProjectsHelper } from './projects.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private projects: Project[];

  constructor() {
    this.projects = ProjectsHelper.getProjects();
   }

  ngOnInit() {
  }

}
