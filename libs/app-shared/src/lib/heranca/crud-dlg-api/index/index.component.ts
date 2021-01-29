import { ChangeDetectionStrategy, Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { DialogService } from '@ngneat/dialog';
import { SidenavComponent } from '../../../components/navigation/sidenav/sidenav.component';

import { ToolbarCrudFooterComponent } from '../../../components/toolbar-crud-footer/toolbar-crud-footer.component';
import { ToolbarCrudSimplesComponent } from '../../../components/toolbar-crud-simples/toolbar-crud-simples.component';
import { BaseComponent } from '../../inheritance.component';

@Component({
  selector: ' html 2',
  template: 'Inheritance: See in logs',

  styleUrls: ['./index.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IndexDlgApiComponent extends BaseComponent implements OnInit {
  protected dialog: DialogService;

  operation = 'index';
  params: any;
  localParams = '';
  isInitializating = true;

  direction = 'DESC';
  active = 'id';
  search = '';
  searchField = 'description';

  dlgConfig = {
    closeButton: false,
    enableClose: false,
    draggable: true,
    height: '240',
    width: '420px',
    backdrop: true,
    data: null
  };

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;
  @ViewChild(ToolbarCrudSimplesComponent) tbCrud: any;
  @ViewChild(ToolbarCrudFooterComponent) tbFooter: any;
  @ViewChild(SidenavComponent) sidenav1: any;
  @ViewChild(SidenavComponent) sidenav2: any;

  @ViewChild('sidenav1') sidenav1Component: SidenavComponent;
  @ViewChild('sidenav2') sidenav2Component: SidenavComponent;

  constructor(injector: Injector, @Inject('environment') env?: any) {
    super(injector, env);

    this.dialog = this.injectorObj.get(DialogService);

    this.activeRoute.queryParams.subscribe((params: any) => {
      if (params) {
        this.params = {};
        this.params = { ...this.params, ...params };
      }
    });

    // this.activeRoute.data.subscribe(data => {
    //   // console.log('====>', data.menu);
    //   this.multilevelMenuService.selectMenuByID(data.menu);
    // });

    if (!this.isDev) {
    }
  }

  ngOnInit(): void {
    // this.params = JSON.parse(localStorage.getItem(this.localParams));
    // if (this.params) {
    //   localStorage.setItem(this.localParams, JSON.stringify(this.params));
    //   console.log('parametros encontrados', this.localParams, this.params);
    // }
    if (Object.keys(this.params).length == 0) {
      this.params = {};
      this.params = JSON.parse(localStorage.getItem(this.localParams));
      console.log('Recriando via LocalStorage', '[', this.localParams, ']', this.params);
    } else {
      // console.log('params encontrados', this.params);
    }

    if (!this.params) {
      console.log('continua null');
      this.params = {};
      this.params.offset = 0;
      this.params.limit = 10;
      this.params.sort = `${this.active},${this.direction}`;
    }
    // this.setPaginationQueryParameters();
  }

  ngAfterViewInit(): void {
    // this.appStoreFacade.setTitle(this.titulo);
    this.paginator = this.tbFooter.paginator;

    // console.log('sidenav1', this.sidenav1Component);
    // console.log('sidenav2', this.sidenav2Component);

    if (this.params.page) {
      this.paginator.pageIndex = Number(this.params.offset);
    }

    if (this.params.limit) {
      this.paginator.pageSize = Number(this.params.limit);
    }
    // this.ngDoCheck();
  }

  onRefresh(): void {
    // if (this.isDev) {
    //   console.log('onRefresh', 'IndexDlgApiComponent', this.params);
    // }
  }

  setParams(): void {
    if (this.params) {
      if (this.paginator && !this.isInitializating) {
        this.params = { ...this.params };

        // this.params.offset = 2;
        // console.log('Gravando parametros ');

        this.params.offset = this.paginator.pageIndex;
        this.params.limit = this.paginator.pageSize;
      } else {
        // console.log('!!!! setParams', 'sem paginator');
      }
    }

    localStorage.setItem(this.localParams, JSON.stringify(this.params));
    this.setPaginationQueryParameters();
  }

  onPaginateAPI(): void {
    this.loadingService.show();
    this.setParams();

    this.onRefresh();

    if (this.paginator) {
      this.paginator.pageIndex = this.params.offset;
      this.paginator.pageSize = this.params.limit;
    } else {
      console.log('onPaginateAPI', 'sem paginator');
    }
    // this.setPaginationQueryParameters();
    this.loadingService.hide();
  }

  onSortAPI(params) {
    this.loadingService.show();

    const currentDirection = this.direction;

    this.active = params.active;
    this.direction = params.direction.toUpperCase();

    this.params = { ...this.params };

    this.params['sort'] = `${this.active},${this.direction}`;

    if (params.direction) {
      this.onRefresh();
      this.setPaginationQueryParameters();
    }
    this.loadingService.hide();
  }

  onFilterApi(param) {
    console.log('onFilterApi heraddo', param);
    // search=carlos&searchBy=customer

    this.loadingService.show();

    const currentDirection = this.direction;

    this.search = param;
    this.params = { ...this.params };
    this.params['searchBy'] = `${this.searchField}`;
    this.params['search'] = `${this.search}`;

    this.onRefresh();
    this.setPaginationQueryParameters();
    this.loadingService.hide();
  }

  setPaginationQueryParameters(): void {
    this.router.navigate([], {
      replaceUrl: true,
      relativeTo: this.activeRoute,
      queryParams: this.params,
      queryParamsHandling: 'merge',
      skipLocationChange: false
    });
  }
}
