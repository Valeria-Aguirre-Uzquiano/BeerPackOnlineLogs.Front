import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-records-logs',
  templateUrl: './records-logs.component.html',
  styleUrls: ['./records-logs.component.css']
})
export class RecordsLogsComponent implements OnInit {
  

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
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
