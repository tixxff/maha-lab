class MahaLap {
  static tamnaiWithDay(day) {
    switch (true) {
      case day === "วันจันทร์":
        return 2;

      case day === "วันอังคาร":
        return 3;

      case day === "วันพุธ":
        return 4;

      case day === "วันพฤหัสบดี":
        return 5;
    }
  }
}
module.exports = MahaLap;
