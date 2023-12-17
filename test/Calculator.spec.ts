import Calculator from "../src/Calculator";

describe("Calculator", () => {
  const calc = new Calculator();

  test("加算できること", () => {
    expect(calc.add(1, 2)).toBe(3);
  });

  test("減算できること", () => {
    expect(calc.subtract(3, 2)).toBe(1);
  });

  test("乗算できること", () => {
    expect(calc.multiply(4, 2)).toBe(8);
  });

  test("除算できること", () => {
    expect(calc.divide(6, 2)).toBe(3);
  });

  test("0で割ると例外を投げること", () => {
    // 同期処理だと例外の確認の際に無名関数を挟む必要がある
    // 多分だけど直で実行すると例外が吐かれてjestが落ちる、
    // 無名関数を挟むことで「エラーを吐いた」という結果ではなく、
    // 「エラーを吐いた関数」というものが比較対象になるんじゃないかなぁってイメージを持ってる
    expect(() => calc.divide(6, 0)).toThrow("Divide by zero error");
  });
});
