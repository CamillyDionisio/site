import { Component } from '@angular/core';
import { Router} from '@angular/router'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, NgIf, MatIconModule]
})

export class HomeComponent {


  constructor(private router: Router){ }


  toogleFavorito(index: number): void {
    this.livros[index].favorito = !this.livros[index].favorito
  }

  verDetalhes(livroId:string){
    this.router.navigate(['/detalhes', livroId]);
  }



 livros: Array<any> = [

  {
    id:1,
    titulo: 'A HIPÓTESE DO AMOR',
    foto: 'https://i.pinimg.com/564x/72/4a/6c/724a6c7ed70936d352fc4abe5924436b.jpg',
    categoria: '+16',
    valor: 'R$40,90',
    genero: 'romance chlicê',
    favorito: true,

  },
  {
    id:2,
    titulo: 'É ASSIM QUE COMEÇA',
    foto: 'https://i.pinimg.com/564x/c4/37/2a/c4372af2686150bbcdad1d5d668aea7b.jpg',
    categoria: '+15',
    valor: 'R$34,99',
    genero: 'ficção',
    favorito: true,

  },
  {
    id:3,
    titulo: 'EU E ESSE MEU CORAÇÃO',
    foto: 'https://i.pinimg.com/564x/e0/fd/5d/e0fd5db20646088bcb9a9f664347197a.jpg',
    categoria: '+14',
    valor: 'R$32,99',
    genero: 'romance contemporâneo',
    favorito: true,

  },
 { id:4,
  titulo: 'NOSSO LUGAR ENTRE COMETAS',
  foto: 'https://i.pinimg.com/564x/bd/6d/ae/bd6dae001517a1032cb58f858cf982d2.jpg',
  categoria: '+14',
  valor: 'R$30,99',
  genero: 'humor',
  favorito: true,

},
{
  id:5,
  titulo: 'CONFESSE',
  foto: 'https://i.pinimg.com/564x/5e/bd/a2/5ebda2589d1e3900a59e0c0bf140db92.jpg',
  categoria: '+15',
  valor: 'R$38,90',
  genero: 'romance',
  favorito: false,

},
{
  id:6,
  titulo: 'TODAS AS FLORES ',
  foto: 'https://i.pinimg.com/564x/f9/78/2a/f9782a070625bf8e2a63ad051ecd096e.jpg',
  categoria: '+14',
  valor: 'R$36,99',
  genero: 'romance',
  favorito: false,

},
{
  id:7,
  titulo: 'AMOR E AZEITONAS',
  foto: 'https://i.pinimg.com/564x/72/0b/56/720b56179f4f2eec4cca494266f40a62.jpg',
  categoria: '+16',
  valor: 'R$59,90',
  genero: 'romance',
  favorito: false,

},
{
  id:8,
  titulo: 'TODAS AS SUAS IMPERFEIÇÕES',
  foto: 'https://i.pinimg.com/564x/47/f0/f3/47f0f33405a5953cab67a77cc14401e3.jpg',
  categoria: '+12',
  valor: 'R$33,90',
  genero: 'ficção',
  favorito: false,

},
 ]
}

