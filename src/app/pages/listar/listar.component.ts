import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  clientes: any[] = []; // Armazena a lista de clientes

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clientes = this.clienteService.listarClientes(); // Obtém a lista de clientes
  }
}
