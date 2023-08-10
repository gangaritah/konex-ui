import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getRequest(route: string, queries?: Object, headers?: Object) {
    let reqHeaders = new HttpHeaders();
    let reqParams = new HttpParams();

    if (headers) {
      Object.getOwnPropertyNames(headers).forEach((key) => {
        reqHeaders = reqHeaders.set(key, headers[key]);
      });
    }

    if (queries) {
      Object.getOwnPropertyNames(queries).forEach((key) => {
        reqParams = reqParams.set(key, queries[key]);
      });
    }

    return this.http.get(route, {
      headers: reqHeaders,
      params: reqParams,
      responseType: "json",
      observe: "response",
      withCredentials: true,
    });
  }

  postRequest(route: string, data?: any, queries?: Object, headers?: Object) {
    let config: Object = {
      responseType: "json",
      withCredentials: true,
      observe: "response"
    };

    if (headers) {
      let header = new HttpHeaders();
      Object.getOwnPropertyNames(headers).forEach((key) => {
        header=header.set(key, headers[key])
      });
      config["headers"] = header;
    }
    console.log("QQQQQQQQQQQ",   config["headers"]);
    

    if (queries) {
      let params = new HttpParams();
      Object.getOwnPropertyNames(queries).forEach((key) => {
        params.set(key, queries[key]);
        console.log(key, queries[key]);
      });
      config["params"] = params;
    }


    return this.http.post(route, data, config);
  }
}