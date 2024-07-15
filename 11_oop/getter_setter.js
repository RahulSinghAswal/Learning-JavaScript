class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    this._password = value; // Maximum call stack size exceeded at set password [as password]
  }
}

const rahul = new User("rahul@abc.com", "abcd");
console.log(rahul.password);
console.log(rahul.email);

console.log(rahul);
