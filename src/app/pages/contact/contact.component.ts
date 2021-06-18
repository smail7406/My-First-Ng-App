import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  myVar='';
  firstname='';
  lastname='';
  email='';
  message='';

  constructor(private http:HttpClient, private router: Router) { }
  
  onSubmit(formData:any){

    let score = 0;
    let max = 4;
    let errorMessage = '';

    //valider la longueur de fristname

    formData.firstname.length > 2 ? score++ : errorMessage+='Firstname must be longer than 2 car\n';
    console.log('score', score);
    console.log(errorMessage);

    //valider la longueur de lastname

    formData.lastname.length > 2 ? score++ : errorMessage+='lastname must be longer than 2 car\n';
    console.log('score', score);
    console.log(errorMessage);

    //valider la presence d'@ dans l'email
    
    /*formData.email.indexOf('@') > 1 ? score++ : errorMessage+='email must contain an @\n';
    console.log('score', score);*/

    //valider la presence d'point dans l'email apres l'@
    
    /*formData.email.indexOf('.') > formData.email.indexOf('@')+2 ? score++ : errorMessage+='email must contain an . after the @\n';
    console.log('score', score);*/
if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[\w]+\.[\w]/.test(formData.email)){
  score++;
}else{
  errorMessage += 'Your email must be valid\n';
}

    //valider la presence d'point au moins 3  caracteres avant la fin de la chaine 
    
    //condition                 ? si la condition est vrai :    si la condition est fausse 
    formData.email.indexOf('.') < formData.email.length -2 ? score++ : errorMessage+='email must contain a valid domain\n';
    console.log('score', score);
    
    let validation = score == max ? true : false;

    if(validation){
      console.log('sending data', formData);
      const headers = new HttpHeaders()
      .set('content-type','application:x-www-form-urlencoded');
      
      this.http.post("https://httpbin.org/post",formData,{headers}).subscribe(
        (Response) =>{
          console.log('retour par le serveur distant',Response)
          if(Response){
            console.log('ok on est bon')

            //on est bon on redirige vers une autre page de l'app
            this.router.navigateByUrl('/about');
          }
        }
      );

    } else{
      alert('Error validating your form!!!\n'+ errorMessage);
    }

    
    

  }

  ngOnInit(): void {
  }

}
