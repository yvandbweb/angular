import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsandusersService {
    baseUrl:string = "https://ydbweb.com:8181/restdemo/";    
    //baseUrl:string = "http://localhost:8080/";  
    baseUrlposts:string = "commentswithposts";
    
    baseUrlusers:string = "userandcomsandposts";

    constructor(private httpClient : HttpClient) {}
    
    get_items(){
        return this.httpClient.get(this.baseUrl+ this.baseUrlposts + '/');
    }
    
    get_items_with_search(srch){
        return this.httpClient.get(this.baseUrl+ this.baseUrlposts + '?search='+srch);
    }    

    get_items_users(){
        return this.httpClient.get(this.baseUrl + this.baseUrlusers + '/');
    }
    
    get_items_users_with_search(srch){
        return this.httpClient.get(this.baseUrl + this.baseUrlusers + '?search='+srch);
    } 

}
