import { NgClass } from "@angular/common";
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [
    NgClass
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {

  isMenuOpen!: boolean;

  ngOnInit(): void {
    this.isMenuOpen = false;
  }

  onMenuClick(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }
}
