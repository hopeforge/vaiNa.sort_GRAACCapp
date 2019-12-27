import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Subscription } from 'rxjs/internal/Subscription';
import { CurrencyPipe } from '@angular/common';

import { EntityListService } from 'src/app/services/entity-list.service';
import { Entity } from 'src/app/models/entity.model';
import * as Highcharts from 'highcharts';

Highcharts.setOptions({
  lang: {
    thousandsSep: '.',
    decimalPoint: ','
  }
});
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public sub: Subscription;
  public value: Entity[];
  public charts: any[] = [];

  constructor(
    public entityService: EntityListService,
    public currencyPipe: CurrencyPipe
  ) { }

  ngOnInit() {
    this.sub = this.entityService.getAll()
      .subscribe(result => {
        this.value = result;
        if (this.value) {
          this.loadCharts();
        }
      }, e => console.error(e));
  }

  loadCharts() {
    const items = this.totalAndQtd();
    const titles = [
      'Valores por UF (R$)',
      'Quantidade por UF',
      'Valores por Tipo de Sanção (R$)',
      'Quantidade por Tipode Sanção',
      'Valores por Fonte de Sanção (R$)',
      'Quantidade por Fonte de Sanção'
    ];
    let i = 0;
    for (let item = 0; item < items.length; item++) {
      let series = [];
      Object.keys(items[item]).forEach((key) => {
        const v = items[item][key];
        series.push({
          type: 'column',
          name: key,
          data: [v]
        });

      });
      let plotOptions: any = {
        column: {
          dataLabels: {
            formatter: function () {
              let value = (Math.round(this.y) / 1000000).toFixed(2);
              if (parseInt(value, 10) > 0) {
                value = `R$ ${value} MM`;
              } else {
                value = (Math.round(this.y) / 1000).toFixed(2);
                if (parseInt(value, 10) > 0) {
                  value = `R$ ${value} M`;
                } else {
                  value = this.y;
                }
              }
              return value;
            },
            enabled: true
          }
        }
      };
      if (i > 3) {
        plotOptions = {};
      }

      this.charts[i] = new Chart({
        chart: {
          type: 'column'
        },
        xAxis: {
          categories: ['Valores', 'Quantidades']
        },
        yAxis: {
          showFirstLabel: true,
          showLastLabel: false
        },
        title: {
          text: titles[i]
        },
        tooltip: {
          pointFormat: `<span style="color:{point.color}">\u25CF</span> <b>{series.name}:</b> ${i % 2 == 0 ? 'R$ {point.y:,.2f}' : '{point.y:,.0f}'}<br/>`
        },
        credits: {
          enabled: false
        },
        plotOptions,
        series
      });
      i++;
    }

  }

  totalAndQtd() {
    const uf = [...new Set(this.value.map(v => v.pessoa_municipio_uf_sigla))];
    const ufTotal = this.sum(this.value, 'pessoa_municipio_uf_sigla', 'valorMulta');
    const ufQtd = [];
    for (const u of uf) {
      ufQtd[u] = this.value.filter(e => e['pessoa_municipio_uf_sigla'] === u).length;
    }
    const tipos = [...new Set(this.value.map(v => v.tipoSancao_descricaoResumida))];
    const tipoTotal = this.sum(this.value, 'tipoSancao_descricaoResumida', 'valorMulta');
    const tipoQtd = [];
    for (const t of tipos) {
      tipoQtd[t] = this.value.filter(e => e['tipoSancao_descricaoResumida'] === t).length;
    }
    const orgao = [...new Set(this.value.map(v => v.fonteSancao_nomeExibicao))];
    const orgaoTotal = this.sum(this.value, 'fonteSancao_nomeExibicao', 'valorMulta');
    const orgaoQtd = [];
    for (const o of orgao) {
      orgaoQtd[o] = this.value.filter(e => e['fonteSancao_nomeExibicao'] === o).length;
    }
    return [ufTotal, ufQtd, tipoTotal, tipoQtd, orgaoTotal, orgaoQtd];
  }

  sum(list: any[], prop1: string, prop2?: string) {
    const r = [];
    const q = [...new Set(list.map(e => e[prop1]))];
    for (const i of q) {
      r[i as any] = this.format(list.filter(e => e[prop1] === i)
        .reduce((p: number, c: any) => p + c[prop2], 0));
    }
    return r;
  }
  format(num?: number) {
    if (!num) {
      num = 0;
    }
    return num;
  }

}
