import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CONFIG} from '../config/config';
import {Manufacturer} from '../models/manufacturer.entity';

@Injectable({
  providedIn: 'root'
})

export class AssortmentService {

  constructor(private http: HttpClient) {
  }

  getAssortment() {
    return this.http.get<Manufacturer[]>(`${CONFIG.apiUrl}`)
      .pipe(data => data);
  }
}
