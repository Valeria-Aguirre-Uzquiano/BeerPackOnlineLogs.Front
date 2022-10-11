import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogFis } from 'src/app/Models/LogFis';
import { LogsService } from 'src/app/services/logs.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-records-logs',
  templateUrl: './records-logs.component.html',
  styleUrls: ['./records-logs.component.css']
})
export class RecordsLogsComponent implements OnInit {
  

  constructor(private modal: NgbModal, private logService: LogsService,private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    //this.setData()
    this.getLogs();
 
  }
  items = this.logService.getLogsFis();
  checkoutForm = this.formBuilder.group({
    fecha:'' ,
    idArea:null ,
    idServicio: null ,
    condicionServicio: '',
    nroEvento: '',
    tipoEvento: '',
    condicion: '',
    resultado: '',
    responsable: '',
  });
  onSubmit(): void {
    
    this.items = this.logService.getLogsFis();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.logService.postLogFis(this.checkoutForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => []
    );
    location. reload()
    this.checkoutForm.reset();
  }
 
  total: any[]=[] 
  response: any = [];
  LogsFis: any | LogFis = [];
  

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

 


  

  // TODO: Remove this when we're done
  // get diagnostic() {
  //   return JSON.stringify(this.model);
  // }

  showFormControls(form: any) {
    return form && form.controls['name'] && form.controls['name'].value; // Dr. IQ
  }

  getLogs(){
    this.logService.getLogsFis().subscribe(
      res => {
        //console.log(res);
        this.response = res;
        //console.log(this.response.content);
        this.LogsFis = res;
        console.log(this.LogsFis);
      },
      err => console.log(err)
    );
  }
  

}
