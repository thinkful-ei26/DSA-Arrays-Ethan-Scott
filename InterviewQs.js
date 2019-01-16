function replaceSpace(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      arr[i] = "%20";
    }
  }
  return arr.join("");

}
console.log(replaceSpace("www.thinkful.com /tauh ida parv een"));

//run time is O(n)
