import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  placeholderData = "Account number"
  uname:any
  psw:any

  constructor() { }

  ngOnInit(): void {
  }
  login () {

    console.log(this.uname, this.psw);
    
  }

}
