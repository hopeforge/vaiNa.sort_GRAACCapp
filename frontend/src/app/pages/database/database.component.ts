import { Component, OnInit, OnDestroy } from '@angular/core';
import { EntityListService } from 'src/app/services/entity-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss']
})
export class DatabaseComponent implements OnInit, OnDestroy {
  public characters: any;
  public sub: Subscription;
  public settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      // id: {
      //   title: 'ID'
      // },
      sancionado_codigoFormatado: {
        title: 'CNPJ'
      },
      // pessoa_razaoSocialReceita: {
      //   title: 'Razao Social'
      // },
      sancionado_nome: {
        title: 'Nome Sancionado'
      },
      pessoa_numeroTelefone: {
        title: 'Telefone'
      },
      pessoa_municipio_uf_sigla: {
        title: 'UF'
      },
      tipoSancao_descricaoResumida: {
        title: 'Tipo Sanção'
      },
      // dataInicioSancao: {
      //   title: 'Data Inicio'
      // },
      dataFimSancao: {
        title: 'Data Fim Sanção'
      },
      fonteSancao_nomeExibicao: {
        title: 'Fonte Sanção'
      },
      valorMulta: {
        title: 'Valor Multa',
        valuePrepareFunction: (value: any) =>
          Intl.NumberFormat('pt-BR', {
            style: 'currency', currency: 'BRL'
          }).format(value)
      }
      // ,favorito:{title:'Favorito'}
    }
  };
  constructor(public entityService: EntityListService) { }

  ngOnInit() {
    this.sub = this.entityService.getAll()
      .subscribe(result => {
        this.characters = result;
      }, e => console.error(e));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
