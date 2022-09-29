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
 
  API_URL = 'http://localhost:8080/';
  totalComision?: Number | undefined;
  headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  setData() {
    this.http.get(this.API_URL + 'entereza/ventasMes').subscribe((res) => {
      let resSTR = JSON.stringify(res);
      let resJSON = JSON.parse(resSTR);
      console.log(resJSON);
   
      this.total = resJSON;

      
    });
  }
  openCentrado(contenido: any) {
    this.modal.open(contenido, { centered: true });
  }

  openScroll(contenido: any) {
    this.modal.open(contenido, { scrollable: true });
  }

  tipo = ['Hardware', 'Software', 'Telecom', 'HelpDesk', 'Seguridad', 'Otros'];
  servicio = ['Mantenimiento', 'Soporte', 'Reparacion', 'Evento', 'Otros'];

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
