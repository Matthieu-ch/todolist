export class List {
    toDoName: string;
    createdDate: Date;
    numberList: number;
    
    constructor(toDoName: string, createdDate: Date, numlberList: number) {
      this.toDoName = toDoName;
      this.createdDate = createdDate;
      this.numberList = numlberList;
    }
  }