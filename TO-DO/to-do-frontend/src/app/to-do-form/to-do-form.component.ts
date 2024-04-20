import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-to-do-form',
  templateUrl:'./to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss']
})
export class ToDoFormComponent implements OnInit {
readonly APIUrl="http://localhost:5038/api/todoapp/";
  constructor(private http:HttpClient) { }
notes:any=[];




  refreshNotes() {
    this.http.get(this.APIUrl+'GetNotes').subscribe(data=>{
      this.notes=data;
      console.log("data coming",data);
    })
  }

  ngOnInit(): void {
      this.refreshNotes();
  }
}
