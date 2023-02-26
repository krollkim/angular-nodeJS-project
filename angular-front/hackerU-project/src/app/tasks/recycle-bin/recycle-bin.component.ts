import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Task } from '../tasks.interface';
// import { TasksComponent } from '../tasks.component';


@Component({
  selector: 'app-recycle-bin',
  templateUrl: './recycle-bin.component.html',
  styleUrls: ['./recycle-bin.component.scss']
})
export class RecycleBinComponent implements OnInit {

  data: Task[] = [];
  
  returnTask(item: Task){
    const sub = this.http.put<Task[]>(`tasks/restore/${item.id}`, {}).subscribe(() => {
    item.isDeleted = false;
    
    
    sub.unsubscribe();
     });
    const i = this.data.findIndex(x => x.id === item.id);
     this.data.splice(i, 1);
   }

   constructor(private http: HttpService) { }

  ngOnInit(): void {
    const sub = this.http.get<Task[]>("tasks?deleted=true").subscribe(data => {
      this.data = data;
        sub.unsubscribe();
      
    });
  
  }
}
