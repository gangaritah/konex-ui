import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


export interface UserData {
  name: string;
  laboratory: string;
  manufacturingDate: Date
  dueDate: Date;
  stock: number;
  valueUnit: number
}

export interface DialogData {
  more: string,
  close: string,
  id: string,
  name: string,
  price: number,

}


@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  displayedColumns: string[] = ['Nombre', 'Laboratorio', 'Fabricacion', 'Vencimiento', 'Stock', 'Valor /U', 'Acciones'];
  medicines: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(    private clientHttp: ClientService,     public dialog: MatDialog

    ) { }

    openDialog(id: string, name: string, price: number): void {
      
      const dialogRef = this.dialog.open(DialogSale , {
        data: {close: "close", more: "more", id: id, name: name, price: price},
        maxWidth: '500px',
        maxHeight: '100vh',
        position: {top: '100px'}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        //this.form.reset()
        
      
        
        if (result == "close"){
          //this.router.navigate(['/assessments']);
          console.log(343434343434);
          
  
  
        }
        console.log('The dialog was closed', result );
      });
    }

  ngOnInit(): void {
    this.clientHttp.getRequest(`/medicines`, undefined, undefined).subscribe(
      (response: any) => {
        console.log(response.body);
        this.medicines = new MatTableDataSource(response.body);
        this.medicines.paginator = this.paginator;
        this.medicines.sort = this.sort;

        

    },
    (error) => {
      console.log(error);
    })
  
  }

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.medicines.filter = filterValue.trim().toLowerCase();

    if (this.medicines.paginator) {
      this.medicines.paginator.firstPage();
    }
    
  }

  sale(id: string, name: string, price: number) {
    console.log(id, 44444444444);
    this.openDialog(id, name, price);

    
  }

}


@Component({
  selector: 'dialog-sale',
  templateUrl: 'dialog-sale.html',
  styles: [`.field-full-width {
    width: 80%;
  }
  
  .form{
    width: 100%;
    max-width:400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;
    
  }`]
})
export class DialogSale  implements OnInit{
  form: FormGroup;
  facturar: boolean = false;
  totalMedicines: number;
  constructor(
    public dialogRef: MatDialogRef<DialogSale>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
     private clientHttp: ClientService, private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      amount: ['', Validators.required]
    });
    
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  total(){

    this.facturar = true
    this.totalMedicines = this.form.value.amount;
  }  

  onSubmit() {


    if (this.form.valid) {
      console.log(88);
      
      this.clientHttp.postRequest(`/sales`, {
        amount: this.form.value.amount,
        idMedicine: this.data.id

        }, undefined, undefined).subscribe(
        (response: any) => {
          //this.dialogRef.close();
          console.log(response);
          
          
          //this.router.navigate(['/room-assessment', this.id_session]);
        },
        (error) => {
          console.log(error);
        })

        
    } else {

      console.log("Form error");
    }
  }
}
