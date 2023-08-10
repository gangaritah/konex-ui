import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private isLogin = new BehaviorSubject<boolean>(this.checkToken());
  private isEvaluator = new BehaviorSubject<boolean>(this.checkRolEvaluator());
  private isCandidate = new BehaviorSubject<boolean>(this.checkRolCandidate());


  private checkToken() : boolean {
    return !!localStorage.getItem('token');
  }


  private checkRolEvaluator() : boolean {
    return localStorage.getItem('rol')=="evaluator"?true:false;
  }


  private checkRolCandidate() : boolean {
    return localStorage.getItem('rol')=="candidate"?true:false;
  }

 
  login(token: string, rol: string) : void {
    localStorage.setItem('token', token);
    localStorage.setItem('rol', rol);
    if (rol == "evaluator"){
      this.isEvaluator.next(true);
    }
    if (rol == "candidate"){
      this.isCandidate.next(true);
    }
    this.isLogin.next(true);

  }

  getToken(){
    if (!this.checkToken()){
      return new Error('No token provided');
    }
    return localStorage.getItem('token');
  }


  
  setCourrentUser(name:string, lastName:string) : void {
    sessionStorage.setItem('courrentUser', `${name} ${lastName}`);
  }

  
  getCourrentUser() : string {
    return sessionStorage.getItem('courrentUser');
  }


  private deleteCourrentUser() : void {
    sessionStorage.removeItem('courrentUser');
  }


  logout() : void {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.deleteCourrentUser();
    this.isLogin.next(false);
    this.isCandidate.next(false);
    this.isEvaluator.next(false);
  }


  isLoggedIn() : Observable<boolean> {
    return this.isLogin.asObservable();
   }

   isRolEvaluator() : Observable<boolean> {
    return this.isEvaluator.asObservable();
   }

   isRolCandidate() : Observable<boolean> {
    return this.isCandidate.asObservable();
   }

}