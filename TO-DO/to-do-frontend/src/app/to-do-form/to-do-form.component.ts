import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-to-do-form',
  templateUrl:'./to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {
readonly APIUrl="http://localhost:3000/api/todoapplication/";
  constructor(private http:HttpClient) { }
notes:any=[];
bio:any=[];
  refreshNotes() {
    this.http.get(this.APIUrl+'GetNote').subscribe(data=>{
      this.notes=data;
      console.log("data coming",data);
    })
  }
getBiodata() {
    this.http.get(this.APIUrl+'GetBiodata').subscribe(data=>{
      this.bio=data;
      console.log("data coming",data);
    })
  }
  ngOnInit(): void {
      this.refreshNotes();
      this.getBiodata();
  }
}
