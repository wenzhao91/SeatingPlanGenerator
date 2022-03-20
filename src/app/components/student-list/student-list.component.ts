import {Component, OnInit} from '@angular/core';
import {Student} from "../../student.model";
import {Classroom} from "../../classroom.model";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'indexNumber'];
  attendanceColumns: string[] = ['name', 'indexNumber', 'isPresent'];
  dataSource = [];
  students: Student[] = []
  classRoom: Classroom = new Classroom(0, 0, 0, 0, this.students)

  constructor() {
  }

  ngOnInit(): void {
  }

  firePopulateList(studentForm: any) {
    let lines = studentForm.studentInput.split(/\r?\n/);
    this.students = []
    for (const line of lines) {
      if (line.length == 0) {
        continue;
      }
      let tokens = line.split(/,/)
      let tokensTrim = []
      for (const token of tokens) {
        tokensTrim.push(token.trim())
      }
      this.students.push(new Student(tokensTrim))
    }
    this.students.sort((a, b) => a.indexNumber - b.indexNumber)
  }

  confirmClassRoomConfig(classRoomData: any) {
    this.classRoom = new Classroom(
      classRoomData.rowCount,
      classRoomData.colCount,
      classRoomData.minId,
      classRoomData.maxId,
      this.students)
    console.log(this.classRoom)

  }

  print() {
    console.log("Fake printing, please implement")
  }

}
