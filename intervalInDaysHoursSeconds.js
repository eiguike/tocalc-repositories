number("firstDate");
number("secondDate");

calculation((firstDateString, secondDateString) => {
  const oneDayInSeconds = 24 * 60 * 60;
  const hoursInSeconds = 60 * 60;

  const firstDate = Math.round(Math.min(
    new Date(firstDateString).getTime(),
    new Date(secondDateString).getTime()
  ) / 1000);
  const secondDate = Math.round(Math.max(
    new Date(firstDateString).getTime(),
    new Date(secondDateString).getTime()
  ) / 1000);

  const daysInSeconds = secondDate - firstDate;
  const days = daysInSeconds / oneDayInSeconds;
  const hours = daysInSeconds / hoursInSeconds;
  const seconds = daysInSeconds;

  result({ result: `INTERVALO EM DIAS: ${days}`});
  result({ result: `INTERVALO EM HORAS: ${hours}`});
  result({ result: `INTERVALO EM SEGUNDOS: ${seconds}`});
});
