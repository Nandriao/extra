function formatNumber(number: number) {
  if (number) {
    const [integerPart, decimalPart] = number.toString().split(".");
    let formattedNumber = "";

    for (let i = 0; i < integerPart.length; i++) {
      formattedNumber += integerPart[i];
      if (
        (integerPart.length - i - 1) % 3 === 0 &&
        i !== integerPart.length - 1
      ) {
        formattedNumber += ".";
      }
    }

    if (decimalPart !== undefined) {
      if (decimalPart.length === 0) {
        formattedNumber += ",00";
      } else {
        formattedNumber += "," + decimalPart.slice(0, 2);
      }
    }

    return formattedNumber;
  }
}

export default formatNumber;
