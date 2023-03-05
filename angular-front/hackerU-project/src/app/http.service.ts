import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilityService } from './Utilityservice';
import { finalize } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
    private readonly url = 'http://localhost:3000';
    private readonly options = { withCredentials: true };


    get<T>(path: string) {
        setTimeout(() => {
            this.utility.loader(true);
        });

        return this.httpClient.get<T>(`${this.url}/${path}`, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }
    post<T>(path: string, body: any){
        this.utility.loader(true);

        return this.httpClient.post<T>(`${this.url}/${path}`, body, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }
    put<T>(path: string, body: any){
        this.utility.loader(true);

        return this.httpClient.put<T>(`${this.url}/${path}`, body, this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }
    delete<T>(path: string){
        this.utility.loader(true);

        return this.httpClient.delete<T>(`${this.url}/${path}`,this.options).pipe(finalize(() => {
            this.utility.loader(false);
        }));
    }
  constructor(private httpClient: HttpClient, private utility: UtilityService ) { }
}
