import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicosService } from '../../services/servicos.service';
import { Router } from '@angular/router';
import { ClienteService } from '../../services/cliente.service'; // Importa o ClienteService

@Component({
  selector: 'app-servico',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {
  servicoForm!: FormGroup;

  tiposServicos: { nome: string }[] = [
    { nome: 'Criação de site (institucional/pessoal)' },
    { nome: 'Desenvolvimento sistema gestão empresarial' },
    { nome: 'Desenvolvimento sistema e-commerce' },
    { nome: 'Atualização conteúdo do site' },
    { nome: 'Atualização conteúdo da estrutura' },
    { nome: 'Outro' }
  ];

  constructor(
    private fb: FormBuilder,
    private servicoService: ServicosService,
    private router: Router,
    private clienteService: ClienteService // Injeta o ClienteService
  ) {}

  ngOnInit(): void {
    this.servicoForm = this.fb.group({
      descricao: ['', Validators.required],
      status: ['Normal', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.servicoForm.valid) {
      const formData = this.servicoForm.getRawValue(); // Pega todos os valores do formulário

      // Removendo o nome do cliente (não será mais necessário)
      // formData.cliente = this.clienteService.getNomeCliente(); // Removido

      // Calcular o valor estimado baseado no tipo de serviço
      let valorEstimado = 0;
      if (formData.descricao === 'Criação de site (institucional/pessoal)') {
        valorEstimado = 1000;
      } else if (formData.descricao === 'Desenvolvimento sistema gestão empresarial') {
        valorEstimado = 2000;
      } else if (formData.descricao === 'Desenvolvimento sistema e-commerce') {
        valorEstimado = 2500;
      } else if (formData.descricao === 'Atualização conteúdo do site') {
        valorEstimado = 500;
      } else if (formData.descricao === 'Atualização conteúdo da estrutura') {
        valorEstimado = 700;
      } else if (formData.descricao === 'Outro') {
        valorEstimado = 0; // Aqui você vai deixar como 0 ou outro valor, já que o valor real é a ser confirmado
      }

      // Adiciona o valor estimado ao formulário
      formData.valorEstimado = valorEstimado;

      // Envia os dados para o serviço
      this.servicoService.cadastrarServico(formData);

      alert('Orçamento solicitado com sucesso!');
      this.servicoForm.reset();
      this.router.navigate(['/listar']); // Redireciona para a página de listagem
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  onCancel(): void {
    this.servicoForm.reset(); // Reseta o formulário
  }
}
