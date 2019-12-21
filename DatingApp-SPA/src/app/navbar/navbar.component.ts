import { Component, OnInit } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { AlertifyjsService } from "../_services/alertifyjs.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  model: any = {};
  constructor(
    public auth: AuthService,
    private alert: AlertifyjsService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    this.auth.login(this.model).subscribe(
      next => {
        this.alert.success("Logged in successfully");
      },
      error => {
        this.alert.error(error);
      },
      () => {
        this.router.navigate(["/members"]);
      }
    );
  }

  loggedIn() {
    return this.auth.loggedIn();
  }

  logout() {
    localStorage.removeItem("token");
    this.alert.message("User logged out");
    this.router.navigate(['/home']);
  }
}
