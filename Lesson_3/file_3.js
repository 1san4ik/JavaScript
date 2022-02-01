class User {
  country = "Ukraine"
  colorSkin = "white"
  thisYear = 2022
  constructor(name = "Ivan", surname = "Ivanov", birthday = 2000, _salary = 1000) {
    this.name = name
    this.surname = surname
    this.birthday = birthday
    this._salary = _salary
  }
  nameSurname() {
    console.log(this.name + " " + this.surname)
  }
  year() {
    console.log(this.thisYear - this.birthday)
  }
  get salary() {
    return this._salary
  }
  set salary(value) {
    if (value > this._salary) {
      this._salary = value
    } else {
      console.log('Error salary')
    }
  }
}

const user = new User("Alexandr", "Kazmirchuk", "1977", 5000);
console.log(user)

user.nameSurname()
user.year()

console.log(user.salary)
user.salary = 8000
console.log(user.salary)