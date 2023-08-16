import { Component } from '@angular/core';
import { ContadorService } from '../service/contador.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public users!: string[];
  constructor(private contadorService: ContadorService){
    this.getUsers();
    console.log(this.users);
  }

  getUsers(){
    this.users = this.contadorService.getUsers();
  }
}
