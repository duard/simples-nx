import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { format, parse } from 'date-fns';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-toolbar-crud-simples',
  templateUrl: './toolbar-crud-simples.component.html',
  styleUrls: ['./toolbar-crud-simples.component.scss'],
})
export class ToolbarCrudSimplesComponent implements OnInit {
  value = '';

  @Input() operation = 'index';
  @Input() pesquisa: boolean;

  @Input() canAdd: boolean;
  @Input() customCancel = false;

  @Input() title: string;
  @Input() isValid: boolean;
  @Input() isDirty: boolean;
  @Input() matMenuMore: MatMenu;
  @Input() matMenuFilter: MatMenu;
  @Input() matMenuIndex: MatMenu;

  @Input() datepicker: boolean;
  @Input() tipoPeriodo: any[];
  @Input() listaEventos: any[];

  @Input() showAnoSelect: boolean;

  @Input() showFilter: boolean = true;
  @Input() showAddButton: boolean = true;
  @Input() showMenuButton: boolean = true;

  // VARIAVEIS para SEREM USADOS (nomes corrigidos)
  @Output() add = new EventEmitter();
  @Output() save = new EventEmitter();
  @Output() processar = new EventEmitter();

  @Output() cancel = new EventEmitter();
  @Output() cancelSearch = new EventEmitter();
  @Output() clickSearch = new EventEmitter();

  @Output() refresh = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() filterLocal = new EventEmitter();
  @Output() filterAPI = new EventEmitter();
  @Output() ativo = new EventEmitter();
  @Output() inativo = new EventEmitter();

  // VARIAVEIS a serem IGNORADOS
  // @Input() showFilterButton = false;
  @Input() searching = false;
  @Input() keyWord = null;

  @Output() more = new EventEmitter();
  // @Output() params;
  @Input() showButton = true;

  @Input() showSelect = false;
  @Input() placeholderSelect: string;
  @Input() registrosSelect: any[];
  @Input() idNameSelect: string;
  @Input() descNameSelect: string;
  @Output() changeSelect = new EventEmitter();

  // @ViewChild('inputBuscar', {static: true}) inputSearch: ElementRef; # antes do angular 8
  @ViewChild('inputBuscar', { static: false }) inputSearch: ElementRef;

  settings: any;
  onSettingsChanged: Subscription;

  params = {};
  @Input() localParams;

  dtNow = new Date();
  dtIni: Date = new Date();
  dtFim: Date = new Date();
  periodo: string;
  codigoEvento: number;

  @Input() showLeftMenu = false;
  @Input() showProcessar = false;
  @Input() labelAdd = 'Adicionar';
  @Input() labelProcessar = 'Processar';
  @Input() labelCancel = 'Cancelar';
  @Input() labelConfirmar = 'Confirmar';
  @Input() showCancel = true;

  anoList = [];
  anoAtual = new Date().getFullYear();

  constructor(
    private _location: Location,
    private cdRef: ChangeDetectorRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    let date = this.anoAtual - 4;
    const dtFim = date + 20;
    this.anoList = [];
    while (date <= dtFim) {
      this.anoList.push(date);
      date += 1;
    }

    const params = JSON.parse(localStorage.getItem(this.localParams));
    if (params) {
      this.dtIni = parse(params.dtIni || new Date());
      this.dtFim = parse(params.dtFim || new Date());
      this.periodo = params.tipoPeriodo || 'VENCIMENTO';
      this.codigoEvento = params.codigoEvento;
    }
  }

  onCancel() {
    if (this.customCancel) {
      this.cancel.emit();
    } else {
      this._location.back();
    }
  }

  onClickSearch() {
    this.searching = !this.searching;
    this.searchFocus();
    // this.clickSearch.emit();
  }

  onDelete(event) {
    this.delete.emit(event);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    if (this.inputSearch) {
      this.ngDoCheck();
    }
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngDoCheck() {
    this.cdRef.detectChanges();
  }

  setParams(value, type) {
    if (type !== 'dtIni' && type !== 'dtFim') {
      this.params[type] = value;
    } else {
      if (type === 'dtIni') {
        this.dtIni = parse(format(value, 'YYYY-MM-DD'));
        if (this.dtIni > this.dtFim) {
          this.dtFim = parse(format(value, 'YYYY-MM-DD'));
        }
      }
      const dtParse = format(value, 'YYYY-MM-DD');
      this.params[type] = dtParse;
    }
  }

  searchFocus(): void {
    this.ngDoCheck();
    if (this.searching) {
      if (this.inputSearch) {
        this.inputSearch.nativeElement.focus();
        this.inputSearch.nativeElement.value = this.keyWord || null;
        if (this.keyWord) {
          this.applyFilter(this.keyWord);
        }
        setTimeout(() => this.inputSearch.nativeElement.focus(), 0);
        setTimeout(
          () => (this.inputSearch.nativeElement.value = this.keyWord),
          0
        );
      }
      this.searching = true;
    } else {
      this.searching = false;
      this.cancelSearch.emit();
    }
  }

  setWordSearchInput() {
    if (this.searching) {
      setTimeout(
        () => (this.inputSearch.nativeElement.value = this.keyWord),
        0
      );
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.keyWord = filterValue;
    this.filterLocal.emit(this.keyWord);
  }

  filterByAPI(filterValue: string) {
    console.log('toolbar filterByAPI', filterValue);
    this.filterAPI.emit(filterValue);
  }

  onChangeSelect(value) {
    this.changeSelect.emit(value);
  }
}
