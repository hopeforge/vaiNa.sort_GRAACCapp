import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

export abstract class AbstractService {
  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  protected handleError<T>(_operation = 'operation', result?: T) {
    return (_error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
} 