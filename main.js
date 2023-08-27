$("form").submit(function (e) {
  e.preventDefault();

  $("ol").append("<li>" + $("#nome-tarefa").val() + "</li>");
  $("#nome-tarefa").val("");
});

$("ol").on("click", "li", function () {
  $(this).toggleClass("selected");
});
