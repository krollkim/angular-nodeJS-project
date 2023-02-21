import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CreateCustomerComponent } from "./customers/create-customer/create-customer.component";
import { CustomersComponent } from "./customers/customers.component";
import { EditCustomerComponent } from "./customers/edit-customer/edit-customer.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { RecycleBinComponent } from "./tasks/recycle-bin/recycle-bin.component";
import { TaskEditComponent } from "./tasks/task-edit/task-edit.component";
import { TasksComponent } from "./tasks/tasks.component";


export const routes: Routes = [
    
    
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent, canLoad: [] },
    { path: 'tasks', component: TasksComponent },
    { path: 'recycle-bin', component: RecycleBinComponent },
    { path: 'task/:id', component: TaskEditComponent },
    { path: '', component: CustomersComponent },
    { path: 'create-customer', component: CreateCustomerComponent },
    { path: 'customers/edit-customer/:id', component: EditCustomerComponent},
    { path: 'about', component: AboutComponent },
    { path: '**', component: ErrorPageComponent },

];