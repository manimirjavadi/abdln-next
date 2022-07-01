export function digitsToPersian(num) {
  if (!num) {
    return "۰";
  }
  const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return num
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    .replace(/\d/g, (x) => farsiDigits[x]);
}
