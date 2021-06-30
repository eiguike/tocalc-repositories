number("initialContribution");
number("interestTaxes");
number("months");

calculation((initialContribution, interestTaxes, months) => {
  const result = { result: initialContribution * (1 + (interestTaxes/100)) };
  if (months <= 1) {
    return [result];
  }

  return [
    result,
    ...calculate(result.result, interestTaxes, months - 1)
  ];
});
