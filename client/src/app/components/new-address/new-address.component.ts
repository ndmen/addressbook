import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from './../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
export interface Subject {
  name: string;
}
@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css'],
})
export class NewAddressComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList : any;
  @ViewChild('resetAddressForm') myNgForm : any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  addressForm: FormGroup;
  subjectArray: Subject[] = [];
  SectioinArray: any = ['A', 'B', 'C', 'D', 'E'];
  ngOnInit() {
    this.submitBookForm();
  }
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private addressApi: ApiService
  ) {}
  /* Reactive book form */
  submitBookForm() {
    this.addressForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    });
  }
  /* Add dynamic languages */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.subjectArray.length < 5) {
      this.subjectArray.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  /* Remove dynamic languages */
  remove(subject: Subject): void {
    const index = this.subjectArray.indexOf(subject);
    if (index >= 0) {
      this.subjectArray.splice(index, 1);
    }
  }
  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.addressForm.controls[controlName].hasError(errorName);
  };
  /* Submit book */
  submitStudentForm() {
    if (this.addressForm.valid) {
      this.addressApi.NewAddress(this.addressForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/addresses-list'));
      });
    }
  }
}
