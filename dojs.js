 
 function copyText() {
  var text = document.getElementById("text").innerText;
  var input = document.getElementById("input");
  input.value = text; // 修改文本框的内容
  input.select(); // 选中文本
  document.execCommand("copy"); // 执行浏览器复制命令
  alert("复制成功");
 }
 
