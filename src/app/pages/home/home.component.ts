import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  arrayImages = ['girl-5957398_640.jpg', 'dandelion-6266230_640.jpg','highway-5314645_640.jpg'];
  jsonImages = [
{
  title: 'Girl',
  url:'dandelion-6266230_640.jpg',
  author:'jacques henry'
},
{
  title: 'highway',
  url:'highway-5314645_640.jpg',
  author:'jacques henry'
},
{
  title: 'Girl',
  url:'girl-5957398_640.jpg',
  author:'jacques henry'
}
  ];
  randomIndex = Math.floor(Math.random()*this.arrayImages.length)
  sourceImage = this.arrayImages[this.randomIndex];
console(str:string){
  console.log(str);
}

valColor = 'red';
varObjet = { "font-size":'20px'}
textPrimary = false;
displayParag = true;
displaySwitch= 1; 

incSwitch(){
  this.displaySwitch++;
this.displaySwitch= this.displaySwitch>3 ? 1 : this.displaySwitch;
}

changeRandom(){
  this.randomIndex = Math.floor(Math.random()*this.arrayImages.length);
}
  constructor() { }

  ngOnInit(): void {
    console.log('jsonImages',this.jsonImages[this.randomIndex].title);

  }

}
