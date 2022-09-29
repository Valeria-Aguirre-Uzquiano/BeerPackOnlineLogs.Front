import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-records-logs',
  templateUrl: './records-logs.component.html',
  styleUrls: ['./records-logs.component.css']
})
export class RecordsLogsComponent implements OnInit {
  

  constructor(private modal: NgbModal, private http: HttpClient) { }

  ngOnInit(): void {
    this.setData()
 
  }
  total: any[]=[]
 
  API_URL = 'http://localhost:3000';
  totalComision?: Number | undefined;
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    auth_headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    postData={
      idArea: 1,
      idServicio: 1,
      fecha: "2022-09-28T17",
      condicionServicio: "A",
      nroEvento: "1",
      tipoEvento: "A",
      condicion: "A",
      resultado: "A",
      responsable: "A"
  }
  setData() {

    this.http.post<HttpResponse<any>>((this.API_URL + '/fis'),this.postData,{ 'headers': this.auth_headers });
    console.log("first")
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
