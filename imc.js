number("weight");
number("height");

calculation((weight, height) => {
  const resultText = weight / (height * height);

  if (resultText < 18.5) {
    return result({ resultText: `MAGRESA ${resultText}`});
  } else if (resultText <= 24.9) {
    return result({ resultText: `NORMAL ${resultText}`});
  } else if (resultText <= 29.9) {
    return result({ resultText: `SOBREPESO ${resultText}`});
  } else if (resultText <= 39.9) {
    return result({ resultText: `OBESIDADE ${resultText}`});
  }
  
  result({ result: `OBESIDADE GRAVE ${resultText}`});
});
