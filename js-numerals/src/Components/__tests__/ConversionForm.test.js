import { convertNumber } from "../ConversionForm";

test("7", () => {
  const result = convertNumber(7);
  expect(result).toBe("seven");
});

test("42", () => {
  const result = convertNumber(42);
  expect(result).toBe("forty-two");
});

test("1999", () => {
  const result = convertNumber(1999);
  expect(result).toBe("one thousand nine hundred and ninety-nine");
});

test("2001", () => {
  const result = convertNumber(2001);
  expect(result).toBe("two thousand and one");
});

test("17999", () => {
  const result = convertNumber(17999);
  expect(result).toBe("seventeen thousand nine hundred and ninety-nine");
});

test("100001", () => {
  const result = convertNumber(100001);
  expect(result).toBe("one hundred thousand and one");
});

test("342251", () => {
  const result = convertNumber(342251);
  expect(result).toBe(
    "three hundred and forty-two thousand two hundred and fifty-one"
  );
});

test("1300420", () => {
  const result = convertNumber(1300420);
  expect(result).toBe(
    "one million three hundred thousand four hundred and twenty"
  );
});

test("0", () => {
  const result = convertNumber(0);
  expect(result).toBe("The entered number must be bigger than 0.");
});

test("1000000000000", () => {
  const result = convertNumber(1000000000000);
  expect(result).toBe("The entered number is out of range.");
});

test("-10", () => {
  const result = convertNumber(-10);
  expect(result).toBe("The entered number must be bigger than 0.");
});
