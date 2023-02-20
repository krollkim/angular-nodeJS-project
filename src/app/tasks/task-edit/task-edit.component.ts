import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';
import { Task, TaskStatuses, UrLevel } from '../tasks.interface';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent {

  task?: Task;
  sub?: Subscription;
  urlevels = UrLevel;
  form?: FormGroup;

  statuses = [
    {
        status: TaskStatuses.open,
        title: 'open',
    },
    {
        status: TaskStatuses.inProgress,
        title: 'inProgress',
    },
    {
        status: TaskStatuses.complete,
        title: 'complete',
    },
];

buildForm(item?: Task) {
  this.form = new FormGroup({
      task: new FormControl(item?.task, [
          Validators.required,
      ]),
      status: new FormControl(item?.status, [
          Validators.required,
      ]),
      level: new FormControl(item?.level, [
          Validators.required,
      ]),
      remark: new FormControl(item?.remark, [
        Validators.required,
      ]),
  });
}

save() {
  const sub = this.http.put<void>(`task/${this.task?.id}`, this.form?.value).subscribe(() => {
    this.router.navigate(['tasks']);
    sub.unsubscribe();
  })
}

getTask(id: string) {
  const sub = this.http.get<Task>(`task/${id}`).subscribe(item => {
      this.task = item;
      this.buildForm(item);
      sub.unsubscribe();
  });
}
constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) {

  this.sub = this.route.params.subscribe(params => {
      this.getTask(params['id']);
  });
}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
