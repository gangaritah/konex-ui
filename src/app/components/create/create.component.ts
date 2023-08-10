import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private clientHttp: ClientService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      laboratory: ['', Validators.required],
      manufacturingdate: ['', Validators.required],
      duedate:  ['', Validators.required],
      stock:  ['', Validators.required],
      unitvalue:  ['', Validators.required]

    });
  }

  onSubmit() {

    if (this.form.valid) {      
      this.clientHttp.postRequest('/medicines', {
        name: this.form.value.name,
        laboratory: this.form.value.laboratory,
        manufacturingDate: this.form.value.manufacturingdate,
        dueDate: this.form.value.duedate,
        stock: this.form.value.stock,
        valueUnit: this.form.value.unitvalue
      }, undefined, undefined).subscribe(
        (response: any) => {
          console.log(response);
       
        },
        (error) => {
          console.log(error);

        })
    } else {
      console.log("Form error");
    }
  }

}
