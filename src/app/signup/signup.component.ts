import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
// import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
// import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  // :boolean
  // :string
  // :any
  // :Array<any>=[];

  signupData: any = {
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  };
  message = '';

  // Inject HttpClient into your component
  // constructor(private http: HttpClient, private router: Router) { }//called first time before the ngOnInit()

  //called after the constructor and called  after the first ngOnChanges() 
  ngOnInit() {
    // this.signupData = '';
  }
  saveUser()
  {
    
  }
  // signup() {
  //   this.http.post('/api/signup',this.signupData).subscribe(resp => {
  //     console.log(resp);
  //    // this.router.navigate(['login']);
  //   }, err => {
  //     this.message = err.error.msg;
  //   });
  // }

}
