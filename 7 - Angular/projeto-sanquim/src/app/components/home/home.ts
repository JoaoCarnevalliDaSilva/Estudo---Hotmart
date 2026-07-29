// CLASSE QUE VAI REPRESENTAR O COMPONENTE - ONDE FICA A LOGICA E TODA A DINAMICA DA PAGINA

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  emailDigitado: string = '';
  senhaDigitada: string = '';

  fazerLogin() {
    if (this.emailDigitado === 'admin@sanquim.com' && this.senhaDigitada === '123') {
      alert('Login realizado com sucesso! Bem-vindo ao Sistema Sanquim 🚀');
      
    } else {
      alert('E-mail ou senha incorretos! Tente admin@sanquim.com / 123');
    }
  }
}
