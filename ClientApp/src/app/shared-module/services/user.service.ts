import {Injectable} from '@angular/core';
import {IUser} from "../models/IUser";
import {Observable, ReplaySubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users: IUser[];
  private currentUser= new ReplaySubject<IUser>(1);
  public currentUser$ = this.currentUser.asObservable();
  constructor() {
    this.users = [
      { id: 1, name: 'reza', recipe: [] },
      { id: 2, name: 'hamid', recipe: [] }
    ];
  }

  public findUser(userId: number): IUser | undefined {
    return this.users.find((u: IUser) => u.id == userId);
  }

  public setCurrentUser(user: IUser): void {
    this.currentUser.next(user);
  }

  public getCurrentUser(): Observable<IUser> {
    return this.currentUser.asObservable();
  }
}
