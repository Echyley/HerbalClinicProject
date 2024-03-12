import { Component, Inject, Input } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { User } from "src/app/interfaces/user-interface";
import { CrudService } from "src/app/services/crud-service.service";
import { ModalUpdateService } from "src/app/services/modal-update.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-modal-update',
  templateUrl: './modal-update.component.html',
  styleUrls: ['./modal-update.component.css']
})
export class ModalUpdateComponent {
  @Input() user: User;

  constructor(
    public crudService: CrudService,
    public modalUpdateService: ModalUpdateService,
    public dialogRef: MatDialogRef<ModalUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {
    this.user = { ...data };
  }

  onSave() {
    const userData: User = {
      id: this.user.id,
      name: this.user.name,
      password: this.user.password,
      email: this.user.email,
    };

    if (userData == userData) {
      this.modalUpdateService.updateUser(userData).subscribe((response) => {
        this.successAlert();
        this.dialogRef.close();
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
    } else if (userData == userData) {
      this.noChangesAlert();
    } else {
      this.errorAlert();
    }
  }

  onCancel() {
    this.dialogRef.close();
  }

  successAlert() {
    Swal.fire({
      title: "Success!",
      text: "User updated successfully",
      icon: "success",
    });
  }

  noChangesAlert() {
    Swal.fire({
      title: "Wait up!",
      text: 'Click "Cancel" if you dont want to update this user now.',
      icon: "info",
    });
  }

  errorAlert() {
    Swal.fire({
      title: "Update failed!",
      text: "There's something wrong with the requisition! Please try again.",
      icon: "error",
    });
  }
}
