import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators/catchError';
import { Observable } from 'rxjs';

import { AbstractService } from './abstract.service';
import { environment as config } from '../../environments/environment';
import { Entity } from '../models/entity.model';

@Injectable({
  providedIn: 'root'
})
export class EntityListService extends AbstractService {

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * getAll
   */
  getAll(): Observable<Entity[]> {
    return this.http.get<Entity[]>(`${config.apiUrl}/penalizacoes`).pipe(
      catchError(this.handleError<Entity[]>('getAllEntities'))
    );
  }

  /**
   * update
   * @param {Entity} entity
   */
  update(entity: Entity) {
    return this.http.put(`${config.apiUrl}/penalizacoes/${entity.id}`, entity).pipe(
      catchError(this.handleError<Entity>('updateEntity'))
    );
  }

}
