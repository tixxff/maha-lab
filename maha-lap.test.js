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

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("วันศุกร์");
    expect(result).toEqual(6);
  });

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("วันเสาร์");
    expect(result).toEqual(7);
  });

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("วันอาทิตย์");
    expect(result).toEqual(1);
  });

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("สงกรานต์");
    expect(result).toEqual(13);
  });

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("ฮาโลวีน");
    expect(result).toEqual(31);
  });

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("คริสมาสต์");
    expect(result).toEqual(25);
  });

  test("Test Tamnai with day", () => {
    const result = MahaLap.tamnaiWithDay("20");
    expect(result).toEqual(99);
  });
});
