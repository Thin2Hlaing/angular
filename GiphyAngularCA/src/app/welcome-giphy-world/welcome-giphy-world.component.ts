import { Component, OnInit ,Input, Output,EventEmitter, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Giphy} from '../model';
import {Service} from '../service';


@Component({
  selector: 'app-welcome-giphy-world',
  templateUrl: './welcome-giphy-world.component.html',
  styleUrls: ['./welcome-giphy-world.component.css']
})
export class WelcomeGiphyWorldComponent implements OnInit {
@Input()
giphyModel: Giphy;

@Input()
username: string;

   constructor(private giphyService: Service){
   }



  ngOnInit() {
  }


  saveAsFavourite(form: NgForm) {

    console.log("add to favourite");
    const datas: Giphy = {
     
     giffyImage: this.giphyModel.giffyImage,
     description: this.giphyModel.description,
     username: this.username,
    };

    this.giphyService.saveAsFavourite(datas).then(data => console.log(data))
    .catch(err=>{
      console.log(err);
    });
  }

}
