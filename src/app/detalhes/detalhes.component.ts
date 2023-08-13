import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})

export class DetalhesComponent implements OnInit {
livroId: string;


constructor(private router: ActivatedRoute){ }

  ngOnInit(){
    this.router.paramMap.subscribe(params=> {
      this.livroId = params.get ('id') ?? '';
    });
  }
}
