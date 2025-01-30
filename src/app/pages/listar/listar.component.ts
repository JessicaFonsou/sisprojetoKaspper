import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../../services/servicos.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  servicos: any[] = [];

  constructor(private servicosService: ServicosService, private router: Router ) {}

  ngOnInit(): void {
    this.servicos = this.servicosService.listarServicos();
  }
  confirmarOrcamento(): void {
    // Lógica para confirmar o orçamento
    alert('Orçamento confirmado! A equipe entrará em contato nas próximas 24 horas.');
     // Redireciona para a página de agradecimento
     this.router.navigate(['/agradecimento']);
}

voltar(): void {
  // Lógica para voltar à tela anterior ou redirecionar
  this.router.navigate(['/servicos']); // Exemplo para navegar de volta a tela de serviços
}
}