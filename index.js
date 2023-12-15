const content = document.querySelector(".content");

content.addEventListener("click", function (e) {
  const clicked = e.target;

  if (
    !(
      clicked.classList.contains("content") ||
      clicked.classList.contains("question")
    )
  ) {
    // If originally the sign is "-"
    if (
      !document
        .querySelector(`.minus__${clicked.dataset.tab}`)
        .classList.contains("hidden")
    ) {
      document
        .querySelector(`.minus__${clicked.dataset.tab}`)
        .classList.add("hidden");
      document
        .querySelector(`.plus__${clicked.dataset.tab}`)
        .classList.remove("hidden");
      document
        .querySelector(`.answer__${clicked.dataset.tab}`)
        .classList.remove("answer__active");
    }

    // If originally the sign is "+"
    else {
      content
        .querySelectorAll(".minus")
        .forEach((t) => t.classList.add("hidden"));
      content
        .querySelectorAll(".plus")
        .forEach((t) => t.classList.remove("hidden"));
      document
        .querySelector(`.minus__${clicked.dataset.tab}`)
        .classList.remove("hidden");
      document
        .querySelector(`.plus__${clicked.dataset.tab}`)
        .classList.add("hidden");
      content
        .querySelectorAll(".answer")
        .forEach((t) => t.classList.remove("answer__active"));
      document
        .querySelector(`.answer__${clicked.dataset.tab}`)
        .classList.add("answer__active");
    }
  }
});
