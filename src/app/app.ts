import { Component, DOCUMENT, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Hero,
    Projects,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(@Inject(DOCUMENT) private document: Document) {
    const baseHref = this.document.getElementsByTagName('base')[0]?.getAttribute('href') || '/';
    this.document.body.style.backgroundImage = `url('${baseHref}assets/images/bg.webp')`;
  }
}
