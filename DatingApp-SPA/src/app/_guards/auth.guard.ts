import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { AlertifyjsService } from "../_services/alertifyjs.service";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private atertify: AlertifyjsService
  ) {}
  canActivate(): boolean {
    if (this.auth.loggedIn()) {
      return true;
    }

    this.atertify.error("You shall not pass!!!");
    this.router.navigate(["/home"]);
    return false;
  }
}
