import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agradecimento',
  templateUrl: './agradecimento.component.html',
  styleUrls: ['./agradecimento.component.css']
})
export class AgradecimentoComponent {
  constructor(private router: Router) {}

  voltar(): void {
    this.router.navigate(['/']);
  }
}
