const renderContentToCourse = data => {
  $("#title").text(data.title);
  $("#briefintro").text(data.briefintro);
  $("#desc").text(data.desc);
  $("#goal").text(data.goal);
  $("#content").text(data.content);
  $("#hero").css("background-image", `url("${data.hero.url}")`);
  $("#class1name").text(data.class1.name);
  $("#class1startdate").text(data.class1.startdate);
  $("#class1deadline").text(data.class1.deadline);
    $("#class1seatleft").text(data.class1.seatleft);
    $("#class2name").text(data.class2.name);
    $("#class2startdate").text(data.class2.startdate);
    $("#class2deadline").text(data.class2.deadline);
    $("#class2seatleft").text(data.class2.seatleft);
  $("#tuition").text(`$${data.tuition}`);
  $("#installment").text(`$${Math.round((data.tuition * 1.15) / 6)}/月`);
};

export { renderContentToCourse };
