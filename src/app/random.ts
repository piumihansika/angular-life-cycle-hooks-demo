import {Component, Injectable, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy} from '@angular/core'

@Component({
  selector: 'random',
  template: `
    <div>
      <input type='button' (click)='random()' value='Generate UserID' />
    </div>
  `
})
export class Random implements OnInit, OnChanges, DoCheck, AfterViewChecked, AfterViewInit, AfterContentInit, AfterContentChecked, OnDestroy{
  @Input() user:string;
  @Output() generateUserId: EventEmitter<string> = new EventEmitter<string>();
  constructor(){
   this.user = '';
   console.log('Child constructor() called');
  }
  
  random(){
    var t = new Date().getTime();
    this.generateUserId.emit(this.user + t.toString());
    console.log('random() called');
  }
  
  ngOnInit(){
    console.log('Child ngOnInit() called');
  }
  
  ngOnChanges(){
    console.log('Child ngOnChanges() called');
  }
  
  ngDoCheck(){
    console.log('Child ngDoCheck() called');
  }
  
  ngAfterViewChecked(){
    console.log('Child ngAfterViewChecked() called');
  } 
  
  ngAfterViewInit(){
    console.log('Child ngAfterViewInit() called');
  }
  
  ngAfterContentInit(){
    console.log('Child ngAfterContentInit() called');
  }
  
  ngAfterContentChecked(){
    console.log('Child ngAfterContentChecked() called');
  }
  
  ngOnDestroy(){
    console.log('Child ngOnDestroy() called');
  }
  
}