test("CR vs LF", () => {
  console.log(process.env.USE_CR ? "Use CR" : "Use LF");
  expect(process.env.USE_CR ? "\r" : "\n").toMatchSnapshot();
});
