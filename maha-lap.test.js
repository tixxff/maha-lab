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

  test("Test Tamnai with story", () => {
    const result = MahaLap.tamnaiWithStory("งู");
    expect(result).toEqual(3);
  });

  test("Test Tamnai with story", () => {
    const result = MahaLap.tamnaiWithStory("แมว");
    expect(result).toEqual(6);
  });

  test("Test Tamnai with story", () => {
    const result = MahaLap.tamnaiWithStory("หมา");
    expect(result).toEqual(6);
  });

  test("Test Tamnai with story", () => {
    const result = MahaLap.tamnaiWithStory("fish");
    expect(result).toEqual(10);
  });

  test("Test Tamnai with time กลางวัน random = 98 return 98", () => {
    global.Math.random = jest.fn(() => 0.98);
    const result = MahaLap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.98);
  });

  test("Test Tamnai with time กลางวัน random = 0.4 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.4);
    const result = MahaLap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with time กลางคืน random = 0.64 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.64);
    const result = MahaLap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with time กลางคืน random = 0.3 return 0.3", () => {
    global.Math.random = jest.fn(() => 0.3);
    const result = MahaLap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.3);
  });

  test("Test Tamnai with time กลางคืน random = 0.5 return 0.5", () => {
    global.Math.random = jest.fn(() => 0.5);
    const result = MahaLap.tamnaiWithTime("กลางคืน");
    expect(result).toEqual(0.5);
  });

  test("Test Tamnai with time กลางวัน random = 0.6 return 0.6", () => {
    global.Math.random = jest.fn(() => 0.6);
    const result = MahaLap.tamnaiWithTime("กลางวัน");
    expect(result).toEqual(0.6);
  });

  test("Test Namo with ฝันวันศุกร์ ตอนกลางคืน เห็นงู", () => {
    global.Math.random = jest.fn(() => 0.6);
    const result = MahaLap.namo("วันศุกร์", "งู", "กลางคืน"); //((6+6+0.5)*100)%1000
    expect(result).toEqual(950);
  });

  test("Test Namo with ฝันวันจันทร์ ตอนกลางวัน เห็นแมว", () => {
    global.Math.random = jest.fn(() => 0.5);
    const result = MahaLap.namo("วันจันทร์", "แมว", "กลางวัน"); //((2+6+0.5)*100)%1000
    expect(result).toEqual(850);
  });
});
