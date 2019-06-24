import { Component, OnInit } from '@angular/core';
import { PostsandusersService } from '../postsandusers.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  p: Number = 1;
  count: Number = 5;  
  items=[];  

  constructor(private puservice : PostsandusersService) { 
     this.puservice.get_items_users().subscribe((res : any[])=>{
                this.items = res;
    }); 
  
  }

  ngOnInit() {
  console.log(this.items);
    
  }
  
  submitsrch(form) {
        console.warn(form.value["srch"]);

        this.puservice.get_items_users_with_search(form.value["srch"]).subscribe((res : any[])=>{
                    this.items = res;
        });    

   }   
     
   onShowUsers(i){
      document.getElementById("showhide"+i).style.display="none";
      document.getElementById("showhideusers"+i).style.display="block";
   }    
    
    
   onShow(i){
      document.getElementById("showhide"+i).style.display="block";
      document.getElementById("showhideusers"+i).style.display="none";
   }    

   onHide(i){
      document.getElementById("showhide"+i).style.display="none";
      document.getElementById("showhideusers"+i).style.display="none";
   }   
   
  emptysearch(i){
      (<HTMLInputElement>document.getElementById('tt'+i)).value='';
  }   
  
  submitresetsrchres(form) {

        this.puservice.get_items_users_with_search("%%").subscribe((res : any[])=>{
                    this.items = res;
        });   
        
         form.reset(); 

    }
}
