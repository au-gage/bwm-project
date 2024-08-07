import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { NgPipesModule } from 'ngx-pipes'
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, RentalComponent, NgPipesModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    location.reload()
  }

  title = 'App component title';

  clickHandler() {
    alert("HELLO THERE!")
  }

}
