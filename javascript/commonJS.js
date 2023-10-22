function readCookie(searchName) {
  let returnVal = "";
  let cook = document.cookie;
  let cookArr = cook.split(";"); // 각 요소에 쿠키가 하나씩 들어감

  for (let i = 0; i < cookArr.length; i++) {
    let cookName = cookArr[i].split("=")[0];
    if (cookName.trim() == searchName) {
      // 쿠키를 찾았다! searchName쿠키의 값을 띄워줘야 함.
      returnVal = cookArr[i].split("=")[1];
    }
  }

  return returnVal;
}
