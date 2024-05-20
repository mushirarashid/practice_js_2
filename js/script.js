// let itsBlue = document.getElementById("blue");
// itsBlue.onclick = function makeBlue() {
//   document.body.style.background = "lightblue";
// };
// let itsBlack = document.getElementById("black");
// itsBlack.onclick = makeblack;

// function makeblack() {
//   document.body.style.background = "black";
// }
// document.getElementById("pink").addEventListener("click", function () {
//   document.body.style.background = "pink";
// });

// input fild text show output

// document.getElementById("bnt_update").addEventListener("click", function () {
//   let input_fild = document.getElementById("input_text");
//   let input_value = input_fild.value;

//   const p_tag = document.getElementById("p_text");
//   p_tag.innerText = input_value;
//   input_fild.value = " ";
// });

// ================

// document.getElementById("bnt_update2").addEventListener("click", function () {
//   let input_fild2 = document.getElementById("input_text2");
//   let input_text2 = input_fild2.value;

//   let p_tag2 = document.getElementById("p_text2");
//   p_tag2.innerText = input_text2;
//   input_fild2.value = " ";
// });

// ========comment===============

// document.getElementById("post_button").addEventListener("click", function () {
//   let comment_text = document.getElementById("text_area");
//   let inner_text = comment_text.value;

//   let area_text = document.getElementById("my_comment");

//   area_text.innerText = inner_text;
//   comment_text.value = " ";
// });

// ======== add comment =======

// document.getElementById("post_button2").addEventListener("click", function () {
//   let comment_box = document.getElementById("text_area2");
//   let comment_box_text = comment_box.value;
//   let commentContainer = document.getElementById("comment_container");
//   let p = document.createElement("p");
//   p.innerText = comment_box_text;
//   commentContainer.appendChild(p);

//   comment_box.value = " ";
// });

// document.getElementById("textBox").addEventListener("keyup", function (even) {
//   const textValue = even.target.value;
//   const deletebtn = document.getElementById("btnDelete");
//   if (textValue === "delete") {
//     deletebtn.removeAttribute("disabled");
//   } else {
//     deletebtn.setAttribute("disabled", true);
//   }
// });

// document.getElementById("btnDelete").addEventListener("click", function () {
//   let info = document.getElementById("secret_info");
//   info.style.display = "none";
// });
// ==================

// document.getElementById("textBox2").addEventListener("keyup", function (even) {
//   const evenValue = even.target.value;
//   const deletebtn2 = document.getElementById("btnDelete2");
//   if (evenValue === "delete") {
//     deletebtn2.removeAttribute("disabled");
//   } else {
//     deletebtn2.setAttribute("disabled", true);
//   }
// });
// document.getElementById("btnDelete2").addEventListener("click", function () {
//   const h1Text = document.getElementById("secret_info_2");
//   h1Text.style.display = "none";
//   let inputBox = document.getElementById("textBox2");
//   inputBox.value = " ";
// });

// delete one click =========
document
  .getElementById("li_container")
  .addEventListener("click", function (even) {
    console.log(even.target.parentNode.removeChild(even.target));
  });

document.getElementById("add_btn").addEventListener("click", function () {
  let ulAdd = document.getElementById("li_container");
  let addLi = document.createElement("li");
  addLi.innerText = "new add";
  addLi.classList.add("item");
  ulAdd.appendChild(addLi);
});
