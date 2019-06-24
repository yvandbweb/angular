import { Component, OnInit } from '@angular/core';
import { PostsandusersService } from '../postsandusers.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs'

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
  p: Number = 1;
  count: Number = 5;  
  items=[];  

  constructor(private puservice : PostsandusersService) { 
     this.puservice.get_items().subscribe((res : any[])=>{
               this.items= res;
     });
  
  }

  ngOnInit() {
  console.log(this.items);
    
  }

  
  submitsrch(form) {
        console.warn(form.value["srch"]);

        this.puservice.get_items_with_search(form.value["srch"]).subscribe((res : any[])=>{
                    this.items = res;
        });    

    }   
    
  submitpost(form) {
        if (form.value["postadd"].trim()!==""){       
         var utc = new Date().toJSON(); 

         var user = {id: create_UUID(), nameuser: "anonymous", dateCreated: utc}

         var objpost={
             id:create_UUID(),
             txt:form.value["postadd"],
             comments:[],
             user:user,
             dateCreated:utc
         }

         this.items.unshift(objpost);

        }  
        form.reset(); 
         event.preventDefault();

    }    
    
    
  submitcomment(form,index,p) {
  
        let indexOfLastTodo = Number(p) * Number(this.count);
        let indexOfFirstTodo = Number(indexOfLastTodo) - Number(this.count);
  
        index=index+indexOfFirstTodo;
        console.log(index);
        if (form.value["commentadd"].trim()!=""){       
         var utc = new Date().toJSON(); 
         

         var user = {id: create_UUID(), nameuser: "anonymous", dateCreated: utc}

         var objpost={
             id:create_UUID(),
             text:form.value["commentadd"],
             user:user,
             dateCreated:utc
         }
         

         this.items[index].comments.push(objpost);
         
         form.reset(); 

        } 

    }    
    
  deletepost(id){
    let commen1=Object.assign([],this.items);
        
    let myArray = commen1.filter(function( common ) {
        return common.id !== id;
    });
    
    commen1=myArray;
    this.items=commen1;
    

    
  }    
  
  deletecomment(id,index,p){
  
    let indexOfLastTodo = Number(p) * Number(this.count);
    let indexOfFirstTodo = Number(indexOfLastTodo) - Number(this.count);

    index=index+indexOfFirstTodo;  
    let commen=Object.assign([],this.items[index].comments);
    let commen1=Object.assign([],this.items);
        
    let myArray = commen.filter(function( common ) {
        return common.id !== id;
    });
    
    commen1[index].comments=myArray;
    
    this.items=commen1;
    

    
  }                              
    
    
   onShow(i){
      document.getElementById("showhide"+i).style.display="block";
   }    

   onHide(i){
      document.getElementById("showhide"+i).style.display="none";
   }   
   
  emptysearch(i){
    (<HTMLInputElement>document.getElementById('tt'+i)).value=''
  }   
  
  submitresetsrchres(form) {

        this.puservice.get_items_with_search("%%").subscribe((res : any[])=>{
                    this.items = res;
        });   
        
         form.reset(); 

    }         

}
