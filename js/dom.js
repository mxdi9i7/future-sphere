const renderContentToCourse = data => {
  $("#title").text(data.title);
  $("#title2").text(data.title);
  $("#briefintro").text(data.briefintro);
  $("#desc").text(data.desc);
  $("#goal").text(data.goal);
  $("#content").text(data.content);
  $("#hero").css("background-image", `url("${data.hero.url}")`);
  $("#tuition").text(`$${data.tuition}`);
  $("#tuition2").text(`$${data.tuition}`);
  $("#installment").text(`$${Math.round((data.tuition * 1.15) / 6)}/月`);
};

export { renderContentToCourse };
