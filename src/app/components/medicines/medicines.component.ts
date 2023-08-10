import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface UserData {
  name: string;
  laboratory: string;
  manufacturingDate: Date
  dueDate: Date;
  stock: number;
  valueUnit: number
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

  constructor(    private clientHttp: ClientService
    ) { }

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

  sale(id: string) {
    console.log(id, 44444444444);
    
  }

}
