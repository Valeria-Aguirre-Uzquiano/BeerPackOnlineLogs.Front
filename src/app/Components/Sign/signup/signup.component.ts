import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public SignupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private userservices: UserService, 
   //private router: Router, 
    //private location: Location
    ) { 
      this.SignupForm = this.formBuilder.group({
      names:[''],
      lastnames:[''],
      email:[''],
      pass: ['']
    });

  }

  ngOnInit(): void {
  }

  getValue(value:string){
    return this.SignupForm.get(value);
  }

  SignUp(){
    //console.log(this.SignupForm.value);
    //console.log(this.router.url);   

    let data = {
      "nombres": this.SignupForm.get('names')?.value,
      "apellidos": this.SignupForm.get('lastnames')?.value,
      "email": this.SignupForm.get('email')?.value,
      "contrasenia": this.SignupForm.get('pass')?.value,
    }

    let resp:any;

    console.log(data);

    
    this.userservices.postUser(data).subscribe(
      res => {
        //console.log(res.ok);
        console.log('Response: '+ res);
        
        if (JSON.parse(JSON.stringify(res)) !='') {
          console.log('notification2');
          /*Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Inicion de sesión Exitoso',
            showConfirmButton: false,
            timer: 1500
          })
          switch(resp[1]){
            case 1:
              console.log("Redirecting to...")
              this.location.replaceState('/');
              setTimeout(() => window.location.replace("http://localhost:4200/inventory"), 1000);
              break;
            case 2:
              console.log("Movies...")
              this.location.replaceState('/'); // clears browser history so they can't navigate with back button
              setTimeout(() => window.location.replace("http://localhost:4200/movies"), 1000);
              break;
          }
          //this.location.replaceState('/'); // clears browser history so they can't navigate with back button
          //this.router.navigate(['movies']);
          */
        }
      },
      err =>{
        console.log('response: '+err.status);
        /*if(err.status === 401){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Datos incorrectos'
          })
        }*/
 
      }
    );  
  }

}
