import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: any[] = [];

  adicionarCliente(cliente: any): void {
    this.clientes.push(cliente);
    console.log('Clientes cadastrados:', this.clientes);
  }

  listarClientes(): any[] {
    return this.clientes;
  }
}
