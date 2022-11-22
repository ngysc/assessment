import React, { useState } from "react";
import Result from "./Result";

const ConversionForm = () => {
  const [result, setResult] = useState("");
  const [number, setNumber] = useState(0);

  const inputParser = (e) => {
    setNumber(Number(e.target.value));
  };

  const handleSubmit = () => {
    return setResult(convertNumber(number));
  };

  const convertNumber = (inputNumber) => {
    const ones = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eightteen",
      "Nineteen",
    ];

    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Fourty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eigthy",
      "Ninety",
    ];

    if (inputNumber < 0) {
      return "The entered number must be bigger than 0.";
    }
    if (inputNumber > 100000000000) {
      return "The entered number must be smaller than 100000000000.";
    }
    if (typeof inputNumber !== "number") {
      return "You must enter a number.";
    }

    let billion = Math.floor(inputNumber / 1000000000); /* billion */
    inputNumber -= billion * 1000000000;
    let million = Math.floor(inputNumber / 1000000); /* million */
    inputNumber -= million * 1000000;
    let thousand = Math.floor(inputNumber / 1000); /* thousand */
    inputNumber -= thousand * 1000;
    let hundred = Math.floor(inputNumber / 100); /* Tens (deca) */
    inputNumber = inputNumber % 100; /* Ones */
    let ten = Math.floor(inputNumber / 10);
    let one = Math.floor(inputNumber % 10);
    let result = "";

    if (billion > 0) {
      result += convertNumber(billion) + " billion";
    }
    if (million > 0) {
      result +=
        (result === "" ? "" : " ") + convertNumber(million) + " million";
    }
    if (thousand > 0) {
      result +=
        (result === "" ? "" : " ") + convertNumber(thousand) + " Thousand";
    }

    if (ten) {
      result +=
        (result === "" ? "" : " ") + convertNumber(hundred) + " hundred";
    }

    if (ten > 0 || one > 0) {
      if (!(result === "")) {
        result += " and ";
      }
      if (ten < 2) {
        result += ones[ten * 10 + one];
      } else {
        result += tens[ten];
        if (one > 0) {
          result += "-" + ones[one];
        }
      }
    }

    return result;
  };

  return (
    <>
      <form className="wrapper" onSubmit={handleSubmit}>
        <label for="number">Number to convert:</label>
        <input
          id="number"
          type="number"
          name="number"
          required
          onChange={inputParser}
        />
        <button>SUBMIT</button>
      </form>
      {result && <Result result={result} />}
    </>
  );
};

export default ConversionForm;
