import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {checkRegExp, conformPassword} from '../../validators/validators';

@Component({
  selector: 'forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})

export class FormsComponent  {

  constructor(private _fb: FormBuilder) {};

  public get skills(): FormArray{
    return this.fbForm.get('skills') as FormArray
  }

  public fbForm = this._fb.group({
    name: ['Vasya', Validators.required],
    skills: this._fb.array([]),
  });

  public newSkill(): FormGroup {
    return this._fb.group({
      skill: '',
      expirience: '',
    })
  }

  public addSkill(): void{
    this.skills.push(this.newSkill());
  }

  public removeSkill(i: number): void{
    this.skills.removeAt(i);
  }

  public onSubmit(){
    console.log(this.fbForm.value);
  }

  public authForm = new FormGroup({
    login: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required ]),
  });

  public validatorsForm = new FormGroup({
    mail: new FormControl('', [ checkRegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g), Validators.required ]),
    password_one: new FormControl(''),
    password_two: new FormControl(''),
  },
    {validators: [conformPassword]}
  );

  public handleValue() {
    if (this.authForm.valid) {
      console.log(this.authForm.value)
    } else {
      alert('Форма не валидна')
    }
  }
}
