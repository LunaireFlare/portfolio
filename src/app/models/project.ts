export class Project {

  constructor(public title: string,
              public imageUrls: string[],
              public stack: string,
              public description: string,
              public liveUrl: string,
              public repoUrl: string
            ) {}
}