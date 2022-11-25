import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { from, Observable } from 'rxjs';

export class Phrase{
  constructor(
    public phrase: string
  ){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cookie Crusher';

  public phrase_list: Phrase[] = []
  private _url: string = "http://localhost:3001"

  constructor(private http: HttpClient){}
  
  ngOnInit(): void {
    this.getData();
  }


  getData() {
    return this.http.get<any>(this._url).subscribe(
      response =>{
        console.log(response.rows)
        this.phrase_list = response.rows; 
      }
    )
  }
 
  score = 0;
  feedback = "";
  
  // const backgrounds = require('../images/background.png');

  counter(){
    this.score++
    console.log("this phrase thing" + this.phrase_list[0].phrase);
    this.feedback = this.phrase_list[this.score % 6].phrase;
  }

  restart(){
     this.score = 0
  }

    

}
 