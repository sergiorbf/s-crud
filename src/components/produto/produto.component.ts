import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProdutoModel } from '../../app/models/produto.model';

@Component({
  selector: 'app-produto',
  standalone: true,
  imports: [CommonModule, TableModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProdutoComponent implements OnInit {
  private _produtosSelecionados: ProdutoModel[] = [];
  public get produtosSelecionados(): ProdutoModel[] {
    return this._produtosSelecionados;
  }
  public set produtosSelecionados(produtosSelecionados: ProdutoModel[]) {
    this._produtosSelecionados = produtosSelecionados;
  }

  public colunasTabela: any[] = [
    {
      field: 'nmProduto',
      header: 'Nome',
      filter: true,
      sortable: true,
      inputType: 'text',
    },
    {
      field: 'nrQuantidade',
      header: 'Quantidade',
      filter: true,
      sortable: true,
      inputType: 'text',
    },
    {
      field: 'cdCategoria',
      header: 'Categoria',
      filter: true,
      sortable: true,
      inputType: 'text',
    },
  ];

  public produtos: ProdutoModel[] = [
    {
      cdProduto: 1,
      nmProduto: 'Esportes',
      nrQuantidade: 5,
      cdCategoria: 1,
    },
    {
      cdProduto: 2,
      nmProduto: 'Eletrônicos',
      nrQuantidade: 5,
      cdCategoria: 1,
    },
    {
      cdProduto: 3,
      nmProduto: 'Lazer',
      nrQuantidade: 5,
      cdCategoria: 1,
    },
  ];

  ngOnInit(): void {}
}
