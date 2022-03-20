export class Student {

  name: string;
  indexNumber: number;

  constructor(tokens: string[]) {
    this.name = tokens[0]
    this.indexNumber = parseInt(tokens[1])
  }

}
