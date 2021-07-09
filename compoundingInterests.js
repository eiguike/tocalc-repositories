number("initialContribution");
number("interestTaxes");
number("months");
number("monthlyContribution");

calculation((initialContribution, interestTaxes, months, monthlyContribution) => {
  const results = [
    { result: `0 ${initialContribution}`}
  ];

  let accumulator = initialContribution;
  for (let i = 1; i < months + 1; i++) {
    accumulator = (accumulator * (1 + (interestTaxes/100)) + parseInt(monthlyContribution));
    results.push(
      { result: `${i} ${accumulator}`}
    );
  }

  return results;
});
