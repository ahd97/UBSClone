import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  message:boolean=true;
  contact:boolean=false;
  starredMsg:boolean=false;
  filecomponent:boolean=false;
  notification:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  msgComponent(){
  this.message=true;
  this.contact=false;
  this.starredMsg=false;
  this.filecomponent=false;
  this.notification=false;
  }

  contactComponent(){
    this.message=false;
    this.contact=true;
    this.starredMsg=false;
    this.filecomponent=false;
    this.notification=false;
  }

  starredMsgComponent(){
    this.message=false;
    this.contact=false;
    this.starredMsg=true;
    this.filecomponent=false;
    this.notification=false;
  }

  fileCmpt(){
    this.message=false;
    this.contact=false;
    this.starredMsg=false;
    this.filecomponent=true;
    this.notification=false;
  }

  notificationComponent(){
    this.message=false;
    this.contact=false;
    this.starredMsg=false;
    this.filecomponent=false;
    this.notification=true;
  }
}