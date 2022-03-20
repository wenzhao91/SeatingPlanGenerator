import {Student} from "./student.model";

export class Classroom {

  rowCount: number;
  colCount: number;
  minId: number;
  maxId: number;
  students: Student[]
  seatingPlan: Student[][]


  constructor(rowCount: number, colCount: number, minId: number, maxId: number, students: Student[]) {
    this.rowCount = rowCount;
    this.colCount = colCount;
    this.minId = colCount;
    this.maxId = maxId;
    this.students = students
      .filter(s => s.indexNumber >= minId && s.indexNumber <= maxId)
    console.log(this.students)
    this.seatingPlan = new Array(rowCount)
    for (let i = 0; i < rowCount; i++) {
      this.seatingPlan[i] = new Array(colCount)
    }


    for (let i = 0; i < rowCount * colCount; i++) {
      let column = Math.floor(i / rowCount);
      let row = i % rowCount;
      if (column % 2 == 1) {
        row = rowCount - row - 1;
      }
      if(i< this.students.length) {
        this.seatingPlan[row][column] = this.students[i]
        continue;
      }
      this.seatingPlan[row][column] = new Student(["null","-1"])
    }
  }


}
