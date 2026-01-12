import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Project } from "../../models/project";

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard implements OnInit, OnDestroy {
  @Input() project!: Project;

  currentImage!: string;
  private imageIndex: number = 0;
  private intervalFunction!: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.project.imageUrls) {
      this.currentImage = this.project.imageUrls[0];
      this.startImageRotation();
    }
  }

  ngOnDestroy(): void {
    this.stopImageRotation();
  }

  private startImageRotation(): void {
    this.intervalFunction = setInterval(() => {
      this.imageIndex = (this.imageIndex + 1) % this.project.imageUrls.length;
      this.currentImage = this.project.imageUrls[this.imageIndex];
      this.cdr.detectChanges();
    }, 3000);
  }

  private stopImageRotation(): void {
    if (this.intervalFunction) {
      clearInterval(this.intervalFunction);
    }
  }
}
