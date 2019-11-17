import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('input_userName') input_userName: any;

  public placeHolder: string;
  public userName: string;
  public userArray: string[] = ['jeason'];
  public isShowCheckResult: boolean = false;
  public password: string;
  public isShowPassword: boolean = false;

  constructor() {
    this.placeHolder = 'Input your user name';
  }

  ngOnInit() {
  }

  private checkuserName(): boolean {
    return this.userArray.includes(this.userName);
  }

  private showCheckResult() {
    this.isShowCheckResult = true;
  }

  private switchIfShowPassword() {
    this.isShowPassword = !this.isShowPassword;
  }
}
