function Student(name, gender, age) {
  
    this.name = name;
    this.gender = gender;
    this.age = age;

}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {

  if (this.marks === undefined) {
    this.marks = [mark];
  }
  else {
    this.marks.push(mark);
  }  
}

Student.prototype.addMarks = function (...tmarks) {

  if (this.marks === undefined) {

    this.marks = tmarks;

  }  
  else {

    tmarks.forEach((item, idx, arr) => this.marks.push(item));
  }  
   
}

Student.prototype.getAverage = function () {
  
  if (!this.hasOwnProperty("marks")) {

    return "Нет оценок";

  } 

  return this.marks.reduce((acc, item, idx, arr) => {

      if (idx === arr.length-1) {
        return (acc + item)/arr.length;
      } 
      
      return acc + item;
      
    },0);   
  
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

