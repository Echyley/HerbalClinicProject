import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  constructor(private crudService: CrudService) {}
  createUser(event: Event) {
    event.preventDefault();

    const name = (event.target as any).name.value;
    const password = (event.target as any).password.value;
    const email = (event.target as any).email.value;

    if (name === '' || password === '' || email === '') {
      this.errorAlert();
      return;
    }

    const newUser = {
      name,
      password,
      email,
    };

    this.crudService.createUser(newUser).subscribe(
      (response) => {
        this.showAlert();
        (event.target as any).reset();
      },
      () => {
        this.errorAlert();
      }
    );
  }

  errorAlert() {
    Swal.fire({
      title: 'Not possible to register!',
      text: ' Fill the required inputs and try again.',
      icon: 'error',
      preConfirm: () => {
        window.location.reload();
      },
    });
  }

  showAlert() {
    Swal.fire({
      title: 'Success!',
      text: 'Product registered successfully',
      icon: 'success',
    });
  }
}
