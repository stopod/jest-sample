import User from "../src/User";

describe("User", () => {
  const suo = new User("Sango Suo", 13);

  test("名前が取得できること", () => {
    expect(suo.getName()).toBe("Sango Suo");
  });

  test("年齢が取得できること", () => {
    expect(suo.getAge()).toBe(13);
  });

  test("挨拶が生成されること", () => {
    expect(suo.greet()).toBe(
      "Hello, my name is Sango Suo and I am 13 years old."
    );
  });

  test("次の年齢が取得できること", () => {
    expect(suo["nextAge"]()).toBe(14);
  });
});
