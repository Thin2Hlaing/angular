/* import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise'; */

import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/take';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {NgForm} from '@angular/forms';
import {Giphy} from './model';

@Injectable()
export class Service{

    constructor(private httpClient: HttpClient) {

    }
  
    search(searchString: string, number: string): Promise<any> {
      const queryString = new HttpParams().set('q', searchString).set('limit',number);
  
      return (this.httpClient.get('https://api.giphy.com/v1/gifs/search?api_key=xzNRKWdxjQC5TrOGrfT4bhQSuyy2Dn5r',
        {params: queryString}).toPromise());
    }

    saveAsFavourite (datas: Giphy): Promise<any> {

        const queryString = new HttpParams()
          .set('username', datas.username)
          .set('giffyImage', datas.giffyImage)
          .set('description', datas.description);
    
         return (this.httpClient.get('http://localhost:8080/GiphyAngularCAServer/saveAsFavouriteServlet',
          {params: queryString}).toPromise()); 
         // return (this.httpClient.get('http://localhost:3306/GiphyAngularCAServer/saveAsFavouriteServlet').take(1).toPromise());
      }

      retrieveFavorite(username: String): Promise<any> {
        console.log("retrieve favourite");
        return (this.httpClient.get('http://localhost:8080/GiphyAngularCAServer/RetrieveFavouriteServlet/' + username)
          .take(1).toPromise());
      }

}