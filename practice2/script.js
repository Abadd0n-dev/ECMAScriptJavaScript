//task 1
class Book {
    title;
    author;
    pages;
    displayInfo () {
        console.log(`Название: "${this.title}"\nАвтор: ${this.author}\nКоличество страниц: ${this.pages}\n`);
    };

    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const book = new Book("Зимние стихи и сказки", "Самуил Маршак", 160);
book.displayInfo(); 

//task 2
class Student {
    name;
    age;
    grade;
    displayInfo () {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}\n`);
    }; 

    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

}
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();
