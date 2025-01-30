// cadastro.component.ts
import { Component } from '@angular/core';
import { ClienteService } from '../../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  constructor(private clienteService: ClienteService, private router: Router) {}

  onSubmit(form: any): void {
    if (form.valid) {
      this.clienteService.setNomeCliente(form.value.nomeCliente); // Salva o nome do cliente
      alert('Cliente cadastrado com sucesso!');
      form.reset();
      this.router.navigate(['/servicos']); // Redireciona para a tela de serviços
    } else {
      alert('Por favor, preencha todos os campos corretamente.');
    }
  }
}
