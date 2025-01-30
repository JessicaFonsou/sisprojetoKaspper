// cliente.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private nomeCliente: string = '';

  setNomeCliente(nome: string): void {
    this.nomeCliente = nome;
  }

  getNomeCliente(): string {
    return this.nomeCliente;
  }
}
