const MahaLap = require("./maha-lap");
describe("Test Maha-Lab", () => {
  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("วันจันทร์");
    expect(result).toEqual(2);
  });

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("วันอังคาร");
    expect(result).toEqual(3);
  });

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("วันพุธ");
    expect(result).toEqual(4);
  });

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("วันพฤหัสบดี");
    expect(result).toEqual(5);
  });
});
