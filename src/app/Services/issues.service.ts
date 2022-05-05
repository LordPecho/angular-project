import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IssuesDTO } from "../models/issues.model";


@Injectable()
export class IssuesService{
  constructor(
    private httpClient: HttpClient
  ){}

  public getAll(): Observable<IssuesDTO[]> {
    return this.httpClient.get<IssuesDTO[]>("https://github.com/microsoft/TypeScript/issues");
  }
  public getIssueList(id: string): Observable<IssuesDTO[]>{
    let params: HttpParams = new HttpParams();
    params = params.append('id', id)
    return this.httpClient.get<IssuesDTO[]>("https://github.com/microsoft/TypeScript/issues" ,{
      params
    });
  }
}
