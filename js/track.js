import tracksData from "../data/tracks.js";

const track = window.location.search.split("=")[1];

if (!track) {
  window.location.href = "/index.html";
} else {
  const currentTrack = tracksData.find(item => {
    return item.id === track;
  });

  $("#title").html(currentTrack.title);
  $("#desc").html(currentTrack.description);
  $("#averageSalary").html(currentTrack.numbers.averageSalary);
  $("#missingPositions").html(currentTrack.numbers.missingPositions);
  $("#timeToTrain").html(currentTrack.numbers.timeToTrain);
  $("#employmentRate").html(currentTrack.numbers.employmentRate);
  $("#highlight1Title").html(currentTrack.highlight1.title);
  $("#highlight1Desc").html(currentTrack.highlight1.desc);
  $("#highlight1Image").attr("src", currentTrack.highlight1.image);
  $("#highlight2Title").html(currentTrack.highlight2.title);
  $("#highlight2Desc").html(currentTrack.highlight2.desc);
  $("#highlight2Image").attr("src", currentTrack.highlight2.image);
  $("#techStack1Title").html(currentTrack.techStacks[0].title);
  $("#techStack1Desc").html(currentTrack.techStacks[0].desc);
  $("#techStack1Image").attr("src", currentTrack.techStacks[0].image);
  $("#highlight2Image").attr("src", currentTrack.highlight2.image);
  $("#techStack1Title").html(currentTrack.techStacks[0].title);
  $("#techStack1Desc").html(currentTrack.techStacks[0].desc);
  $("#techStack1Image").attr("src", currentTrack.techStacks[0].image);
  $("#techStack2Title").html(currentTrack.techStacks[1].title);
  $("#techStack2Desc").html(currentTrack.techStacks[1].desc);
  $("#techStack2Image").attr("src", currentTrack.techStacks[1].image);
  $("#techStack3Title").html(currentTrack.techStacks[2].title);
  $("#techStack3Desc").html(currentTrack.techStacks[2].desc);
  $("#techStack3Image").attr("src", currentTrack.techStacks[2].image);
  $("#thumb1").attr("src", currentTrack.thumbnail[0]);
  $("#thumb2").attr("src", currentTrack.thumbnail[1]);
  $("#thumb3").attr("src", currentTrack.thumbnail[2]);
  console.log(currentTrack);
}
