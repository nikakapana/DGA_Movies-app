import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { MovieResponse } from '../interfaces/movieResponse';

@Injectable({
  providedIn: 'root',
})
export class GetMoviesService {
  apiUrl = environment.fbDbUrl;
  constructor(private http: HttpClient) {}
  getMovies(title = 'hangover'): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(
      this.apiUrl +
        `title/v2/find?title=${title}&amp;limit=20&amp;paginationKey=0&amp;sortArg=moviemeter%2Casc`,
    );
  }
}
