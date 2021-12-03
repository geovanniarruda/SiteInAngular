import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router , private LoginService: LoginService) { }

  ngOnInit(): void {
  }

  loginModel = new Login();

  mensagem = "";

  onSubmit() {

    const blacklist: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "insert ", "exec ", "--", "#", "*", ";"]

    blacklist.forEach(palavra => {
      if(this.loginModel.email.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados inválidos!: " + palavra

        return;
      }
    });


   this.LoginService.login(this.loginModel).subscribe( (response) => {
     this.mensagem = "Login feito com sucesso!";
     this.router.navigateByUrl("/");
   }, (error) => {
     console.log(error)
     this.mensagem = error.error;
   } )
  }

}
