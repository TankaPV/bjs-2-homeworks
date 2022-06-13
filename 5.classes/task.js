class PrintEditionItem {

	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
	  this.type = null;
	}

	fix() {
		this.state = this.state*1.5;
	} 

	set state(value) {
		if (value < 0) {
			this._state = 0;
		} else if (value > 100) {
			this._state = 100;
		} else {
			this._state = value;
		}
	}

	get state() {
		return this._state;
	}   
}	

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	}
}

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount) {
		super(name,releaseDate,pagesCount) 
		this.author = author;
		this.type = "book";
	}
}
 class NovelBook extends Book {
 	constructor (author, name, releaseDate, pagesCount) {
 		super(author,name,releaseDate,pagesCount);
 		this.type = "novel";
 	}
 }
 class FantasticBook extends Book {
 	constructor (author, name, releaseDate, pagesCount) {
 		super(author,name,releaseDate,pagesCount);
 		this.type = "fantastic";
 	}
 }
 class DetectiveBook extends Book {
 	constructor (author, name, releaseDate, pagesCount) {
 		super(author,name,releaseDate,pagesCount);
 		this.type = "detective";
 	}
 }

 class Library {
 	constructor(name) {
 		this.name = name;
 		this.books = [];
 	}

 	addBook(book) {
 		if (book.state > 30) {
 			this.books.push(book);
 		}
 	}

 	findBookBy(type, value) {
 	
 		const valueFound = this.books.find((item) => item[type] === value);

 		if (valueFound === undefined) {
 			return null;
 		}

 		return valueFound;
       
    }

  giveBookByName(bookName) {
    	
   	const indexFound = this.books.findIndex((item) => {
   			return item.name === bookName;
    			
   	});		

   	if (indexFound === -1) {
   		return null;

   	} else {

   		console.log(indexFound);
   		console.log(this.books[indexFound].name);
			return this.books.splice(indexFound, 1)[0];
      
  	}
    	 
  }
}


class Journal {
	constructor (subjectName, marks) {
		this.subjectName = subjectName;
		this.marks = marks;
	}
}

class Student {
  constructor (name) {
  	this.name = name;
  	this.subjects = []; 
  }

  addSubject(value) {
  	this.subjects.push(value);
  }

  addMark(mark, subjectName) {
  	if (this.subjects.some((item) => item.subjectName === subjectName) === false) {
  		    return this.addSubject(new Journal(subjectName, [mark])); 
  	}
  	if (mark < 1 || mark > 5) {
  				return "Ошибка, оценка должна быть числом от 1 до 5";
  	}

  	this.subjects.find((item) => {
  		if (item.subjectName === subjectName) {
  			item.marks.push(mark);
  		} 
    });
  }	

  getAverageBySubject(subjectName) {
  	let avgSub;

  	if (this.subjects.some((item) => item.subjectName === subjectName) === false) {
  		return "Несуществующий предмет"
  	}

  	this.subjects.find((item) => {
  		if (item.subjectName === subjectName) {

  			return avgSub = item.marks.reduce((acc, item, idx, arr) => {

      		if (idx === arr.length-1) {
        		return (acc + item)/arr.length;
      		} 
      
      		return acc + item;
      
    		},0);   
  		} 
    });
    return avgSub; //`Средний балл по предмету ${subjectName} ${avgSub}`;
  }

  getAverage() {
  	let avgTotal, arrMarks = [];
  	this.subjects.forEach((item) => {
      item.marks.forEach((item) => {
      	arrMarks.push(item);
      });

  	});
  	//console.log(arrMarks);

  	avgTotal = arrMarks.reduce((acc, item, idx, arr) => {

      		if (idx === arr.length-1) {
        		return (acc + item)/arr.length;
      		} 
      
      		return acc + item;
      
    		},0); 
    return avgTotal; //`Средний балл по всем предметам ${avgTotal}`;		  
  }

  exclude(reason) {
  	delete this.subjects;
  	this.excluded = reason;
  }
}

