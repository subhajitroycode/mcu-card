const cards = document.querySelectorAll(".card");

cards.forEach((card) =>
  card.addEventListener("click", () => {
    disableCard();
    card.classList.add("active");

    const audio = document.querySelector(
      `audio[data-name="${card.dataset.name}"]`
    );
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  })
);

const disableCard = () => {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
};

document.addEventListener(
  "play",
  (e) => {
    const audios = [...document.getElementsByTagName("audio")];

    console.log(e.target);

    audios.forEach((audio) => audio !== e.target && audio.pause());
  },
  true
);
