import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  inEditMode = false;

  get currentUser(): IUser {
    return this.userService.currentUser as any;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  submitHandler(data: any): void {
    this.userService.updateProfile(data).subscribe({
      next: () => {
        this.inEditMode = false;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  toggleEditMode(): void {
  this.inEditMode = !this.inEditMode;
  }

}
