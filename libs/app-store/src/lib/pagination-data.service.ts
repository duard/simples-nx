import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import {
  DefaultDataService,
  HttpUrlGenerator,
  DefaultDataServiceConfig,
  QueryParams,
  DefaultDataServiceFactory,
  EntityCollectionDataService,
} from '@ngrx/data';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

/**
 * DataService class that handles Django REST Framework's paginated
 * responses.
 */
export class PaginatedDataService<T> extends DefaultDataService<T> {
  private nextPageUrl: string = '';
  private count = 0;

  constructor(
    entityName: string,
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    config?: DefaultDataServiceConfig
  ) {
    super(entityName, http, httpUrlGenerator, config);
    this.nextPageUrl = this.entitiesUrl;
    this.count = 0;
  }

  // Override to store nextUrl as well as map response.results.
  getAll(): Observable<T[]> {
    return this.execute('GET', this.entitiesUrl).pipe(
      tap((response) => {
        console.log('getAll()', response.count);

        this.nextPageUrl = response.next;
        this.count = response.count;
      }),
      map((response, count) => response.data, 1)
    );
  }

  // Override to store nextUrl as well as map response.results.
  getWithQuery(queryParams: QueryParams | string): Observable<T[]> {
    const qParams =
      typeof queryParams === 'string'
        ? { fromString: queryParams }
        : { fromObject: queryParams };
    const params = new HttpParams(qParams);
    return this.execute('GET', this.entitiesUrl, undefined, { params }).pipe(
      tap((response) => {
        // response.next would include the queryparams.
        this.nextPageUrl = response.next;
        this.count = response.count;
      }),
      map((response) => response.results)
    );
  }

  /**
   * Get next page of results. Or empty array if remote data is
   * exhausted.
   */
  getMore(): Observable<T[]> {
    if (!this.hasMore()) {
      // or throwError?
      return of([]);
    }

    return this.execute('GET', this.nextPageUrl).pipe(
      tap((response) => {
        this.nextPageUrl = response.next;
        this.count = response.count;
      }),
      map((response) => response.results)
    );
  }

  /**
   * Returns total number of objects
   */
  totalCount() {
    return this.count;
  }

  /**
   * Returns boolean indicating if there's more data at server.
   */
  hasMore(): boolean {
    return !!this.nextPageUrl;
  }
}

/**
 * Custom DataServiceFactory that creates PaginatedDataService<T>,
 * instead of the DefaultDataService<T>
 */
@Injectable()
export class CustomDataServiceFactory extends DefaultDataServiceFactory {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    @Optional() config?: DefaultDataServiceConfig
  ) {
    super(http, httpUrlGenerator, config);
  }

  create<T>(entityName: string): EntityCollectionDataService<T> {
    return new PaginatedDataService<T>(
      entityName,
      this.http,
      this.httpUrlGenerator,
      this.config
    );
  }
}
