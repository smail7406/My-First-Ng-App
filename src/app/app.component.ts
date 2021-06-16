import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  //proprieté title qui ressemble a une variable
  title = 'This is my title from TypeScript';
  //methode alert( qui ressemble a une fonction)

  nb = 0;
  alert(){
    //on peut declarer des constante et des varibales
    //dans les methodes
    const message = 'this is a message';
    //on peut utuiliser tou les outils javascript
    //dans les methodes
    console.log(message)
    this.nb ++;
    console.log('you\'ve clicked',this.nb);
    //alert(message)
}
}
