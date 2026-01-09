import { Component, OnInit } from '@angular/core';
import { ProjectCard } from "../project-card/project-card";
import { Project } from "../../models/project";

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  projects!: Project[];

  ngOnInit(): void {
    this.projects = [
      new Project(
        "Rioval",
        "/space.avif",
        "html, tailwind, nextjs",
        "Lorem ipsum",
        "#",
        "#"
      ),
      new Project(
        "Orizon",
        "/space.avif",
        "html, css, react, postgresql, docker",
        "Lorem ipsum",
        "#",
        "#"
      ),
      new Project(
        "Coming soon",
        "/space.avif",
        "",
        "Lorem ipsum",
        "#",
        "#"
      ),
    ]
  }

}