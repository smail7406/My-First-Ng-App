import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

galery: any;
page = 1;

  constructor(private http:HttpClient) { }

loadPics(way='',nb = this.page){
  //évalue la valeur de 'way'
  //et definis des cas pour 'next' ou pour 'prev'
  switch(way){

    case 'next':
      this.page++;
      break;

    case 'prev':
      //seulement si page est sup a 1
      //enleve 1  a page
      this.page > 1 ? this.page-- : null;
      break;
    case'' :
    this.page = nb
    break;
  }
  console.log('way & page:', way + ''+ this.page);
  const URL = "https://picsum.photos/v2/list?page="+this.page+"&limit=12"
    this.http.get(URL).subscribe(
  (data)=>{
       this.galery= data;
       console.log(this.galery);
    }
  )
}

  ngOnInit(): void {
  

    this.loadPics();
  }
}

