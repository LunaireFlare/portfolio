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
        "A simple and colourful website to showcase a French small business of the food industry and its recipes. It was designed to reflect the values of the company through vibrant colours and subtle animations. Fully responsive for mobile devices.",
        "https://www.rioval.fr/",
        ""
      ),
      new Project(
        "Orizon",
        ["/projects/orizon/orizon1.png", "/projects/orizon/orizon2.png", "/projects/orizon/orizon3.png"],
        "html, sass, react, typescript, nginx, docker, postgresql",
        "A social platform to help seniors maintain social links after retirement. Its core is its event system, allowing any member to create, search and participate in an event. It comes with an admin dashboard to moderate members and events, and uses a reverse proxy to link the frontends and backend.",
        "",
        "https://github.com/LunaireFlare/orizon"
      ),
      new Project(
        "Portfolio",
        ["/space.avif"],
        "html, tailwind, angular, typescript",
        "A first iteration of my personal portfolio, showcasing my projects and technical stack, to practice Angular and OOP. It is a work in progress, subject to change, and aims for full mobile responsiveness.",
        "#",
        "https://github.com/LunaireFlare/portfolio"
      ),
    ]
  }

}