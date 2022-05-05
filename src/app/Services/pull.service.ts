import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IssuesDTO } from "../models/issues.model";


@Injectable()
export class PullService{
  constructor(
    private httpClient: HttpClient
  ){}

  public getAll(): Observable<IssuesDTO[]> {
    return this.httpClient.get<IssuesDTO[]>("https://github.com/microsoft/TypeScript");
  }
}
