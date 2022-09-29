import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-records-logs',
  templateUrl: './records-logs.component.html',
  styleUrls: ['./records-logs.component.css']
})
export class RecordsLogsComponent implements OnInit {
  

  constructor(private modal: NgbModal, private logService: LogsService) { }

  ngOnInit(): void {
    //this.setData()
 
  }
  total: any[]=[]  
  

  setData() {

    const postData = {
      "idArea": 1,
      "idServicio": 1,
      "fecha": "2022-09-09T17",
      "condicionServicio": "A",
      "nroEvento": "4",
      "tipoEvento": "A",
      "condicion": "A",
      "resultado": "A",
      "responsable": "A"
    }

    console.log(JSON.stringify(postData));
    
    this.logService.postLogFis(postData).subscribe(
      res => {
        console.log(res);
      },
      err => []
    );

  }
  openCentrado(contenido: any) {
    this.modal.open(contenido, { centered: true });
  }

  openScroll(contenido: any) {
    this.modal.open(contenido, { scrollable: true });
  }

  tipo = [
    { "id": 1, "name": "Hardware" },
    { "id": 2, "name": "Software" },
    { "id": 3, "name": "Telecom" },
    { "id": 4, "name": "Helpdesk" },
    { "id": 5, "name": "Seguridad" },
    { "id": 6, "name": "Otros" },
  ];


  servicio = [
    { "id": 1, "name": "Mantenimiento" },
    { "id": 2, "name": "Soporte" },
    { "id": 3, "name": "Reparacion" },
    { "id": 4, "name": "Evento" },
    { "id": 5, "name": "Otros" },
  ];

  servicio2!:any;
 

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }


  

  // TODO: Remove this when we're done
  // get diagnostic() {
  //   return JSON.stringify(this.model);
  // }

  showFormControls(form: any) {
    return form && form.controls['name'] && form.controls['name'].value; // Dr. IQ
  }

}
