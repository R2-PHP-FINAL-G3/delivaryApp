import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/auth/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  constructor(private router: Router, private authService: AuthService) { }
  goTo(params: any) {
    this.router.navigate([params]);
  }
  ngOnInit(): void {

  }
}
