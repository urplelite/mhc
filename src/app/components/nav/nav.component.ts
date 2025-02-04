import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { MaterialModule } from '../../material.module';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-nav',
  imports: [RouterModule, MatButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
