import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { UtilityService } from '../Utilityservice';
import { TaskStatuses, Structure, Task, LevelTypes, UrLevel} from './tasks.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  TaskStatuses = TaskStatuses;
  newTask?: string;

  sections:  Structure[] = [
    {
      status: TaskStatuses.open,
      title: 'Open-Tasks',
      color: 'lightgreen',
      cards: [],
    },

    {
      status: TaskStatuses.inProgress,
      title: 'inProgress-Tasks',
      color: 'lightblue',
      cards: [],
    },

    {
      status: TaskStatuses.complete,
      title: 'complete-Tasks',
      color: 'lightcoral',
      cards: [],
    }
  ];

  UrLevel = UrLevel;

  
  displayMode: 'columns' | 'table' | 'list' | 'folders' = 'columns';
  
addTask() {
  const sub = this.http.post<Task>("tasks", { task: this.newTask }).subscribe(data => {
  this.sections.find(x => x.status == TaskStatuses.open)?.cards.push(data);
      this.newTask = '';
      sub.unsubscribe();
  });
}


  private changeStatus(s: Structure, item: Task, newStatus: TaskStatuses) {
   const sub = this.http.put<void>(`tasks/${item.id}/status/${newStatus}`, {}).subscribe(() => {
   const i = s.cards.findIndex(x => x.id === item.id);
   s.cards.splice(i, 1);
    const struc = this.sections.find(x => x.status == newStatus);
    item.status = newStatus;
    struc?.cards.push(item);

    sub.unsubscribe();
    });
  }

   isDuplicate(){
    const cards = [
      ...this.sections[TaskStatuses.open].cards,
      ...this.sections[TaskStatuses.inProgress].cards,

    ];
    const item = cards.find(x => x.task == this.newTask);

    return Boolean(item);
  }

  changeLevel(item: Task) {
   const sub = this.http.put<void>(`tasks/${item.id}/level/${item.level}`, {}).subscribe(() => {
   
    sub.unsubscribe();
    });
  }


  undo(s: Structure, item: Task) {
    if(s.status == TaskStatuses.complete){
      this.changeStatus(s, item, TaskStatuses.inProgress);
    }
    else{
      this.changeStatus(s, item, TaskStatuses.open);
    }
  }

  prossing(s: Structure, item: Task) {
    this.changeStatus(s, item, TaskStatuses.inProgress);
  }

  complete(s: Structure, item: Task) {
    this.changeStatus(s, item, TaskStatuses.complete);
  }

  clearTask(s: Structure, item: Task){
   const sub = this.http.delete<void>(`tasks/${item.id}`).subscribe(() => {
   const i = s.cards.findIndex(x => x.id === item.id);
   s.cards.splice(i, 1);

   sub.unsubscribe();
    });
  }

  dragover(s: Structure){
    this.sections.forEach(x => x.isDrag = false);
    s.isDrag = true;
  }

  dragend(s: Structure, item: Task) {
    const target = this.sections.find(x => x.isDrag);

    if (target) {
        if (target.status !== s.status) {
            this.changeStatus(s, item, target.status);
        }
    }
    
    this.sections.forEach(x => x.isDrag = false);
}


navigateTask(item: Task) {
  this.router.navigate(['task', item.id]);
}

  constructor(private http: HttpService, private router: Router, public utility: UtilityService) { }

  ngOnInit(): void {
    const sub = this.http.get<Task[]>("tasks").subscribe(data => {
      data.forEach(task => {
        const item = this.sections.find(s => s.status == task.status);
        item?.cards.push(task);
      })
      
      
        sub.unsubscribe();
      
    })
  }
}

