import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('formRef') form;
  username = 'Lorenzo'

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log(formValue)
  }

  ngAfterViewInit() {
    this.form.valueChanges.subscribe(
      v => console.table(v)
    )
    this.form.statusChanges.subscribe(
      v => console.log(v)
    )
  }
}
