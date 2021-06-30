number("weight");
number("height");

calculation((weight, height) => {
  const result = weight / (height * height);

  if (result < 18.5) {
    return [{ result: `MAGRESA ${result}`}];
  } else if (result <= 24.9) {
    return [{ result: `NORMAL ${result}`}];
  } else if (result <= 29.9) {
    return [{ result: `SOBREPESO ${result}`}];
  } else if (result <= 39.9) {
    return [{ result: `OBESIDADE ${result}`}];
  }
  
  return [{ result: `OBESIDADE GRAVE ${result}`}];
});
