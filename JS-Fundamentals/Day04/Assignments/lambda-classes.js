// CODE here for your Lambda Classes

class Person {
    constructor(attributes){
        this.newName = attributes.name;
        this.newAge = attributes.age;
        this.newLocation = attributes.location;
        this.newGender = attributes.gender;
    }

    speak() {
        return `Hello my name is ${this.newName}, I am from ${this.newLocation}`;
    }
}

class Instructor extends Person{
    constructor(personAttr) {
        super(personAttr);
        this.newSpecialty = personAttr.specialty;
        this.newFavLanguage = personAttr.favLanguage;
        this.newCatchPhrase = personAttr.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.newName} receives a perfect score on ${subject}`;
    }

}

class Student extends Person{
    constructor(personAttr) {
        super(personAttr);
        this.newPreviousBackground = personAttr.previousBackground;
        this.newClassName = personAttr.className;
        this.newFavSubjects = personAttr.favSubjects;
        this.newGrade = personAttr.grade;
    }

    listsSubjects() {
        return `My favorite subjects are ${this.newFavSubjects}`;
    }

    PRAssignment(subject) {
        return `${this.newName} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.newName} has begun sprint challenge on ${subject}`;
    }

    graduate() {
        if(this.newGrade >= 70) {
            return `${this.newName}, You Can Graduate!`;
        }
        else {
            return `${this.newName}, you are not ready to graduate.`;
        }
    }
}


class ProjectManagers extends Instructor{
    constructor(instructAttr) {
        super(instructAttr);
        this.newGradClassName = instructAttr.gradClassName;
        this.newFavInstructor = instructAttr.favInstructor;
    }

    standUp(channel) {
        return `${this.newName} announces to ${channel}, @channel standy times!​​​​​`;
    }

    debugsCode(student, subject) {
        return `${this.newName} debugs ${student.newName}'s code on ${subject}`;
    }

}
const josh = new Person({
    name: 'Josh',
    location: 'Utah',
    age: 37,
    gender: 'male',
  });

  const ted = new Person({
    name: 'Ted',
    location: 'New York',
    age: 29,
    gender: 'male',
  });


const barney = new Instructor({
    name: 'Barney',
    location: 'New York',
    age: 32,
    gender: 'male',
    favLanguage: 'Elm',
    specialty: 'Back-end',
    catchPhrase: `Suit up!`
  });

  const robin = new Instructor({
    name: 'Robin',
    location: 'New York',
    age: 28,
    gender: 'female',
    favLanguage: 'C#',
    specialty: 'Front-end',
    catchPhrase: `I'm not ready to get married.`
  });
  
  const lilly = new Student({
    name: 'Lilly',
    location: 'New York',
    age: 29,
    gender: 'female',
    previousBackground: "Teacher",
    className: "Web243",
    favSubjects: [
        "HTML",
        "CSS",
    ],
    grade: 99
  });

  const marshel = new Student({
    name: 'Marshel',
    location: 'New York',
    age: 29,
    gender: 'male',
    previousBackground: "Lawyer",
    className: "Web200",
    favSubjects: [
        "Java",
        "Python",
    ],
    grade: 55
  });

  const cody = new ProjectManagers({
    name: 'Cody',
    location: 'Austin',
    age: 24,
    gender: 'male',
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `Groooosss!`,
    gradClassName: "Web150",
    favInstructor: "Robin"
  });

  const kate = new ProjectManagers({
    name: 'Kate',
    location: 'Cut-n-Shoot',
    age: 31,
    gender: 'female',
    favLanguage: 'Java',
    specialty: 'Redux',
    catchPhrase: `Puns are life!!`,
    gradClassName: "Web151",
    favInstructor: "Barney"
  });

  console.log(josh.newName);
  console.log(josh.speak());

  console.log(ted.newLocation);
  console.log(ted.speak());

  console.log(barney.newCatchPhrase);
  console.log(barney.grade(lilly, "JavaScript"));

  console.log(robin.newSpecialty);
  console.log(robin.demo("CSS"));

  console.log(lilly.newClassName);
  console.log(lilly.listsSubjects());
  console.log(lilly.PRAssignment("Advanced CSS"));
  console.log(lilly.graduate());

  console.log(marshel.newFavSubjects);
  console.log(marshel.sprintChallenge("HTML"));
  console.log(marshel.newGrade);
  console.log(marshel.graduate());

  console.log(cody.newGradClassName);
  console.log(cody.standUp("Web200_Cody"));

  console.log(kate.newFavInstructor);
  console.log(kate.debugsCode(marshel, "React"));