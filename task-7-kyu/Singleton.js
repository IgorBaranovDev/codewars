// https://www.codewars.com/kata/534fcca5edb124cfe6000f60/train/javascript

class Singleton {
  constructor() {
    if (Singleton.state) {
      return Singleton.state;
    }

    Singleton.state = this;

    this.method = null;
  }
}
