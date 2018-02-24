import { Component, ViewChild, Output , EventEmitter, OnInit} from '@angular/core';
import {Giphy} from './model';
import {Service} from './service';
import {NgForm} from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  constructor(private giphyService: Service) { }
  p: number = 1;
  giphyList: Giphy[] = [];
  username: String;

  ngOnInit() {}

  retrieveFavorite(form: NgForm) {

    this.giphyList = [];


    this.giphyService.retrieveFavorite(form.value.username)
      .then((data) => {
        console.log("Thin Thin OK ");
        for (let i = 0; i < data.length; i++) {
           const giphyModel: Giphy = {
            giffyImage: data[i]['giffyImage'],
            description: data[i]['description'],
            favorite: true
          }; 
          this.giphyList.push(giphyModel);
        }
      }).catch(error =>{
        console.log(error);
      });
  }

  search(form: NgForm) {

    this.username = form.value.username; // get username
    this.giphyList = []; // empty list before a new search

  
    this.giphyService.search(form.value.searchString,form.value.number.toString())
      .then((data) => {
      
        for (let i = 0; i < data['data'].length; i++) {
          const giphymodel: Giphy = {
            giffyImage: data['data'][i]['images']['downsized']['url'],
            description: data['data'][i]['title']
          };
          this.giphyList.push(giphymodel);
        }
      });
  }
}
 

