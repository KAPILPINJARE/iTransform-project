
export class User{
    userName:string;
    name:string;
    email:string;
    contactNumber:number;
    password:string;
    course:Courses[];
}

export class Courses{
    courseName:string;
    courseId:number;
    courseChapter:CourseChapter[];
}

export class CourseChapter{
    chapterName:string;
    chapterId:number;
    chapterModule:ChapterModule[];
}

export class ChapterModule{
    moduleName:string;
    moduleId:number;
    moduleDetails:string;
    complete:boolean;
}

export class Quiz{
    quizId:number;
    question:string;
    option1:string;
    option2:string;
    option3:string;
    option4:string;
    answer:string;
}

export class Authenticate{
    userName:string;
    password:string;
}