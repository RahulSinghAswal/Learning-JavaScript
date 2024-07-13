class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }

  //   provide unique id to new user
  static createID() {
    return `123`;
  }
}

const rahul = new User("Rahul");
// console.log(rahul.createID());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const bhanu = new Teacher("Bhanu", "bhanu@abc.com");
bhanu.logMe();

// console.log(bhanu.createID());
