class MahaLap {
  static tamnaiWithDay(day) {
    switch (true) {
      case day === "วันจันทร์":
        return 2;

      case day === "วันอังคาร":
        return 3;

      case day === "วันพุธ":
        return 4;
    }
  }
}
module.exports = MahaLap;
