import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'adrin';
  public nameUpper: string = 'ADRIN';
  public fullName: string = 'aDRiN seSentaItRES';

  public customDate: Date = new Date();
}
