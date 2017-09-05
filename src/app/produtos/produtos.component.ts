import { Component, OnInit } from '@angular/core';
import { Pizza } from './lista-pizzas/pizza.model';
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html'
})
export class ProdutosComponent implements OnInit {

  pizzas: Pizza[] =
  [
    {
     id: '1',
     nome: 'portuguesa',
     descricao: 'presunto, ovos e cebola coberta com mussarela',
     estimativa: '4.5',
     valor: '45.33',
     image:'assets/img/pizza/portuguesa.jpg'
    },
    {
      id: '2',
      nome: 'Mussarela',
      descricao: 'Mussarela Scala e tomate fatiado.',
      estimativa: '4.5',
      valor: '35,00',
      image:'assets/img/pizza/mussarela.jpg'
     },
     {
      id: '3',
      nome: 'Caipira',
      descricao: 'Filé de frango desfiado, milho e Catupiry',
      estimativa: '4.0',
      valor: '42,00',
      image:'assets/img/pizza/franco_cartupiry.jpg'
     },
     {
      id: '4',
      nome: 'Palmito',
      descricao: 'Fatias de palmito especial e leve cobertura de mussarela.',
      estimativa: '3.0',
      valor: '48,00',
      image:'assets/img/pizza/palmito.jpg'
     },
     {
      id: '5',
      nome: 'Peperoni',
      descricao: 'Mussarela, peperoni e leve toque de parmesão.',
      estimativa: '5.0',
      valor: '39,00',
      image:'assets/img/pizza/peperoni.jpg'
     }
  ]

  constructor() { }

  ngOnInit() {
  }

}