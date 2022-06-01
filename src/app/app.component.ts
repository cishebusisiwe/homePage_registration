import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  register(){
    let data ={id: 1, name: 'xyz' }
    localStorage.setItem('User', JSON.stringify(data))

    
  }
}
