import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss']
})
export class RodapeComponent {
title:string = 'Plataforma de livros';
copyright:string = 'Desenvolvido em 2023';
developer:string = 'Camilly Dionísio- Start Tech';

redesSociais: Array<any> = [
  {nome: 'linkedin',
   link: 'https://www.linkedin.com/in/camilly-dion%C3%ADsio-b6b216223',
   foto: 'https://img.freepik.com/icones-gratis/linkedin_318-246161.jpg'
  },

  {nome:'whatsApp',
   link: 'https://api.whatsapp.com/send?phone=5511992794674&text=Oi%20Camilly,%20visualizei%20o%20seu%20site%20do%20curso%20start%20%3Ctech%3E',
   foto:'https://img.freepik.com/icones-gratis/whatsapp_318-162854.jpg'

  },
  {nome:'Github',
  foto: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
  link: 'https://github.com/CamillyDionisio'
}
]
}
