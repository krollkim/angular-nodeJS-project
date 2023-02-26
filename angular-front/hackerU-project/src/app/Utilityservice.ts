import { Injectable } from '@angular/core';
import { User } from './signup/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private user?: User;

  isLoader?: boolean;

  loader(isStart: boolean) {
      this.isLoader = isStart;
      document.body.style.overflow = isStart ? 'hidden' : 'initial';
  }

  setUser(user?: User){
    this.user = user;
  }

  getUser(){
      return this.user;
  }

  constructor() { }

}
