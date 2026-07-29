// CLASSE QUE VAI REPRESENTAR O COMPONENTE - ONDE FICA A LOGICA E TODA A DINAMICA DA PAGINA

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necessário para ler os inputs

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importamos o FormsModule aqui
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  // Variáveis que vão guardar o que for digitado nos inputs
  emailDigitado: string = '';
  senhaDigitada: string = '';

  // Função que é acionada quando o usuário clica em Entrar
  fazerLogin() {
    // Validação "mokada" (falsa/simulada)
    if (this.emailDigitado === 'admin@sanquim.com' && this.senhaDigitada === '123') {
      alert('Login realizado com sucesso! Bem-vindo ao Sistema Sanquim 🚀');
      
      // Aqui, daqui a pouco, nós vamos mandar o usuário para a tela do Dashboard!
      
    } else {
      alert('E-mail ou senha incorretos! Tente admin@sanquim.com / 123');
    }
  }
}
