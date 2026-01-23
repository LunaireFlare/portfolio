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
        [
          "assets/projects/rioval/rioval1.png", 
          "assets/projects/rioval/rioval2.png", 
          "assets/projects/rioval/rioval3.png", 
          "assets/projects/rioval/rioval4.png"
        ],
        "html, tailwind, nextjs, typescript | git, github",
        "A simple and colourful website to showcase a small French food business and its recipes. It was designed to reflect the values of the company through vibrant colours and subtle animations. Fully responsive for mobile devices.",
        "https://www.rioval.fr/",
        ""
      ),
      new Project(
        "Orizon",
        [
          "assets/projects/orizon/orizon1.png", 
          "assets/projects/orizon/orizon2.png", 
          "assets/projects/orizon/orizon3.png"
        ],
        "html, sass, react, typescript | nodejs, postgresql, sequelize, docker, nginx | git, github",
        "A social platform to help senior citizens maintain social links after retirement. At its core is the event system, allowing any member to create, search and participate in an event. It comes with an administrator dashboard to moderate members and events, and uses a reverse proxy to link the frontends and backend.",
        "",
        "https://github.com/LunaireFlare/orizon"
      ),
      new Project(
        "Portfolio",
        [
          "assets/projects/portfolio/portfolio1.png",
          "assets/projects/portfolio/portfolio2.png"
        ],
        "html, tailwind, angular, typescript | git, github",
        "A first iteration of my personal portfolio, showcasing my projects and technical stack, in order to practice Angular and OOP. It is a work in progress, subject to change, and aims to have full mobile responsiveness.",
        "#",
        "https://github.com/LunaireFlare/portfolio"
      ),
      new Project(
        "Currently in development",
        [
          "assets/images/space.avif",
        ],
        "html, tailwind, angular, typescript | nodejs, postgresql, sequelize, docker | git, github",
        "A planning & organisation app for personal and professional trips.",
        "",
        ""
      ),
    ]
  }

}