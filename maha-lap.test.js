const MahaLap = require("./maha-lap");
describe("Test Maha-Lab", () => {
  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("วันจันทร์");
    expect(result).toEqual(2);
  });

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("วันอาทิตย์");
    expect(result).toEqual(1);
  });
});
