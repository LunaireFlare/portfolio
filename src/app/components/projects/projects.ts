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
        ["/projects/rioval/rioval1.png", "/projects/rioval/rioval2.png", "/projects/rioval/rioval3.png", "/projects/rioval/rioval4.png"],
        "html, tailwind, nextjs, typescript",
        "A colourful website developed to showcase a French small business called Rioval and its arancini recipes, in the spirit of its creator.",
        "#",
        "#"
      ),
      new Project(
        "Orizon",
        ["/projects/orizon/orizon1.png", "/projects/orizon/orizon2.png", "/projects/orizon/orizon3.png"],
        "html, sass, react, typescript, nginx, docker, postgresql",
        "A social platform to help seniors maintain social links after retirement. It is based around an events system, where any member can create, search and participate in an event. Comes with an admin dashboard to moderate members and events.",
        "#",
        "#"
      ),
      new Project(
        "Portfolio",
        ["/space.avif"],
        "html, tailwind, angular, typescript",
        "A first iteration of my personal portfolio, showcasing my projects and technical stack, to practice Angular and OOP.",
        "#",
        "#"
      ),
    ]
  }

}