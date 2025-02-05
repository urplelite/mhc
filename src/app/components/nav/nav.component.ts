import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import { MaterialModule } from '../../material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, MatButtonModule, MatIconModule, MatToolbarModule, MatMenuModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

}
