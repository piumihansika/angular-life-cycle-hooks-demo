import {
  Component,
  Injectable,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewChecked,
  AfterViewInit,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "userdetails",
  template: `
    <div>
      <h2>Name :</h2>
      <input type="text" [(ngModel)]="name" />
      <input type="text" [(ngModel)]="prefix" />
      <random
        [user]="prefix"
        (generateUserId)="onGenerateUserId($event)"
      ></random>
      <h3>UserID : {{ userid }}</h3>
    </div>
  `
})

export class Userdetails
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewChecked,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy {
  name: string = "Angular";
  prefix: string = "";
  userid: string = "";
  constructor() {
    this.name = "";
    console.log("Parent constructor() called");
  }

  onGenerateUserId(uid:string) {
    console.log("Generating UserID");
    this.userid = uid;
  }

  ngOnInit() {
    this.name = "John Doe";
    console.log("Parent ngOnInit() called");
  }

  ngOnChanges() {
    console.log("Parent ngOnChanges() called");
  }

  ngDoCheck() {
    console.log("Parent ngDoCheck() called");
  }

  ngAfterViewChecked() {
    console.log("Parent ngAfterViewChecked() called");
  }

  ngAfterViewInit() {
    console.log("Parent ngAfterViewInit() called");
  }

  ngAfterContentInit() {
    console.log("Parent ngAfterContentInit() called");
  }

  ngAfterContentChecked() {
    console.log("Parent ngAfterContentChecked() called");
  }

  ngOnDestroy() {
    console.log("Parent ngOnDestroy() called");
  }
}
