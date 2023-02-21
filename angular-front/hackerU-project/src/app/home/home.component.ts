import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { HttpService } from '../http.service';
import { Userlogin } from '../login/login.interface';
import { TaskStatuses } from '../tasks/tasks.interface';
import { UtilityService } from '../Utilityservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'home';
  welcome = 'welcome to my website'

  statuses = [
    {
      status: TaskStatuses.open,
      title: 'Open-Tasks',
      color: 'lightgreen',
      cards: [],
      count: 0,
    },

    {
      status: TaskStatuses.inProgress,
      title: 'inProgress-Tasks',
      color: 'lightblue',
      cards: [],
      count: 0,
    },

    {
      status: TaskStatuses.complete,
      title: 'complete-Tasks',
      color: 'lightcoral',
      cards: [],
      count: 0,
    }
  ];
  logout() {
    const sub = this.http.get("logout").pipe(finalize(() => {
        if (sub?.unsubscribe) {
            sub.unsubscribe();
        }
    })).subscribe(() => {
        this.utility.setUser();
        this.router.navigate(['login']);
    });
}

  constructor(public utility: UtilityService, private http: HttpService, private router: Router) { }

  ngOnInit() {
      const sub1 = this.http.get<Userlogin>("login").pipe(finalize(() => {
          if (sub1?.unsubscribe) {
              sub1.unsubscribe();
          }
      })).subscribe(data => {
          if (data.status == 'error') {
              this.router.navigate(['home']);
          } else {
              this.utility.setUser(data.user);
          }
      });
  

    const sub2 = this.http.get<{ status: number; count: number }[]>("tasks/counter").pipe(finalize(() => {
        if (sub2?.unsubscribe) {
            sub2.unsubscribe();
        }
    })).subscribe(data => {
    data.forEach(x => {
        const item = this.statuses.find(s => s.status == x.status);

            if (item) {
                item.count = x.count;
            }
        });
    });
  }
}

