const numberFormatter = (number: number) => {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const formattedNumber = formatter.format(number);
  return formattedNumber;
};

export default numberFormatter;
