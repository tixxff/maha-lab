class MahaLap {
  static tamnaiWithDay(day) {
    switch (true) {
      case day === "วันอาทิตย์":
        return 1;

      case day === "วันจันทร์":
        return 2;

      case day === "วันอังคาร":
        return 3;

      case day === "วันพุธ":
        return 4;

      case day === "วันพฤหัสบดี":
        return 5;

      case day === "วันศุกร์":
        return 6;

      case day === "วันเสาร์":
        return 7;

      case day === "สงกรานต์":
        return 13;

      case day === "ฮาโลวีน":
        return 31;

      case day === "คริสมาสต์":
        return 25;

      default:
        return 99;
    }
  }

  static tamnaiWithStory(story) {
    const n = story.length;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum % 100;
  }

  static tamnaiWithTime(time) {
    const randomNumber = Math.random();
    if (time === "กลางวัน") {
      if (randomNumber >= 0.5) {
        return randomNumber;
      } else {
        return 0.5;
      }
    }
    if (time === "กลางคืน") {
      if (randomNumber >= 0.5) {
        return 0.5;
      } else {
        return randomNumber;
      }
    }
  }

  static namo(day, story, time) {
    const resultDay = this.tamnaiWithDay(day);
    const resultStory = this.tamnaiWithStory(story);
    const resultTime = this.tamnaiWithTime(time);
    return ((resultDay + resultStory + resultTime) * 100) % 1000;
  }
}
module.exports = MahaLap;
