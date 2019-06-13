import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { Courses } from 'src/app/course/course';

@Component({
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

    user:User;
    course :Courses[];
    constructor(private userService:UserService,
                private router:Router){}

    ngOnInit(){
        this.user = new User();
        this.userService.getAllCourses().subscribe((data) =>{
            this.course = data;
        console.log(this.course)
            
        })
        
        
    }

    registerNewUser(){

        console.log(this.course)
        this.user.course = this.course;
        this.userService.addNewUser(this.user).subscribe((data)=>{
            console.log(data)
            if(data!=null){
                alert("Registration is successfull")
                this.router.navigate(["/login"]);
            }
        })

    }

}
