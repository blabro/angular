import { AfterContentInit, Component, OnInit, DoCheck, NgModule } from '@angular/core';
import { Inject, Injectable } from '@angular/core';
import {
  OnChanges,
  Directive,
  Input,
  HostBinding,
  Renderer2,
  ElementRef,
  SimpleChanges
} from "@angular/core";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  ngOnInit(): void {  
  }

  ngDoCheck(){
  }
  
}