import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  private servicos: any[] = [];

  cadastrarServico(servico: any): void {
    const valorHora = servico.valorHora || 0;
    const diaTrabalhado = servico.diaTrabalhado || 0;
    const horaDia = servico.horaDia || 0;

    const valorTotal = valorHora * diaTrabalhado * horaDia;

    // Adiciona o valor calculado e os outros dados ao serviço
    const servicoComValor = { 
      ...servico, 
      valorTotalProjeto: valorTotal,
      tipoServico: servico.descricao,
      status: servico.status,
    };

    // Adiciona o serviço com o valor calculado na lista
    this.servicos.push(servicoComValor);
    console.log('Serviço cadastrado:', servicoComValor);
  }

  listarServicos(): any[] {
    return this.servicos;
  }
}
