import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from 'src/app/shared/models/country.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly api_url = `${environment.api_url}`;

  constructor(
    private readonly http: HttpClient,
  ) { }

  // call api get country data
  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api_url}/all`);
  }
}
