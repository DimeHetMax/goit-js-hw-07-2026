const categories = document.querySelectorAll("#categories .item");
console.log("Number of Categories:", categories.length);

categories.forEach((category) => {
  console.log("Category:", category.children[0].textContent);
  console.log("Elements:", category.children[1].children.length);
});
