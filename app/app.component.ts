import { Component } from '@angular/core';
import "rxjs/Rx";

@Component({
  selector: 'my-app',
  template: `
    <h1 (click)='GetData()'>
      My First Angular App
       <h3>        
          {{this.pageTitle}}
      </h3>
    </h1>
    `
})
export class AppComponent {

  pageTitle: string = "Default";

  GetData(): void {
    this.pageTitle = "Changed";
  }
  
}
