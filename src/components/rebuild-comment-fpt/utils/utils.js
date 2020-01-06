export function getBackDate(currentDateTime) {
  let dateComment = new Date(parseInt(currentDateTime));
  let c_date = new Date();
  var result = "";

  let second = Math.round((c_date.getTime() - dateComment.getTime()) / 1000, 1);
  let minute = Math.round((c_date.getTime() - dateComment.getTime()) / 6000, 1);
  let hours = Math.round(
    (c_date.getTime() - dateComment.getTime()) / (1000 / 60 / 60),
    1
  );
  let day = Math.round(
    (c_date.getTime() - dateComment.getTime()) / (24 * 60 * 60 * 1000)
  );

  result = second + " giây trước";

  if (minute > 0) {
    result = minute + " phút trước";
  }

  if (hours > 0) {
    result = hours + " giờ trước";
  }

  if (day > 0) {
    result = day + " ngày trước";
  }

  if (day > 30) {
    result =
      "vào ngày " +
      dateComment.getDate() +
      "/" +
      (dateComment.getMonth() + 1) +
      "/" +
      dateComment.getFullYear();
  }

  return result;
}

export function URL_API() {
  const a = "ok";
  const b = "ko";
  return {
    a: a,
    b: b
  };
}
