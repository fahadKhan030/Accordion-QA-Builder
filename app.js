let question = document.getElementById("question");
let ans = document.getElementById("ans");

function createQuestionAnswer(questionText, answerText) {
  // Create container for the question and answer
  const container = document.createElement("div");
  container.classList.add(
    "flex",
    "flex-col",
    "item-center",
    "justify-center",
    "w-[90%]",
    "mb-4"
  );

  const questionContainer = document.createElement("div");
  questionContainer.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "bg-blue-500",
    "text-white",
    "w-full",
    "rounded-md",
    "flex-row-reverse"
  );

  // Create the question element
  const question = document.createElement("h2");
  question.classList.add(
    "text-xl",
    "text-white",
    "w-[80%]",
    "font-semibold",
    "bg-blue-500",
    "rounded-md",
    "pl-2",
    "cursor-pointer"
  );
  question.textContent = questionText;

  
  //  create a Element for the edit and close
  const closeEdit = document.createElement("div");
  closeEdit.classList.add(
    "flex",
    "items-center",
    "justify-between",
    "pr-2",
    "gap-2"
  );

  // elemtnt for close
  const closeImage = document.createElement("img");
  closeImage.src =
    "https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=close";
  closeImage.style.height = "10px";
  closeImage.classList.add("cursor-pointer");

  // Create the answer element
  const answer = document.createElement("div");
  answer.classList.add(
    "hidden",
    "text-lg",
    "text-white",
    "w-[90%]",
    "bg-green-500",
    "rounded-tl-none",
    "rounded-tr-none",
    "pl-2",
    "rounded-md",
    "w-full"
  );

  const answerParagraph = document.createElement("p");
  answerParagraph.classList.add("text-white", "w-full");
  answerParagraph.textContent = answerText;

  questionContainer.appendChild(closeEdit);
  closeEdit.appendChild(closeImage);
  container.appendChild(questionContainer);
  questionContainer.appendChild(question);

  container.appendChild(answer);
  answer.appendChild(answerParagraph);

  // Add click event listener to toggle the answer visibility
  question.addEventListener("click", function () {
    answer.classList.toggle("hidden");
    questionContainer.classList.toggle("rounded-b-none");
  });

  closeImage.addEventListener("click", function (event) {
    container.remove();
  });

  return container; // Return the created container
}

function addnew() {
  // Get input values
  const questionInput = document.getElementById("questionInput").value.trim();
  const answerInput = document.getElementById("answerInput").value.trim();

  // Check if both inputs are not empty
  if (questionInput !== "" && answerInput !== "") {
    // Create new question-answer pair
    const newQ = createQuestionAnswer(questionInput, answerInput);

    // Append to the container
    const qcontainer = document.getElementById("container");
    qcontainer.appendChild(newQ);

    // Clear input fields after adding the question
    document.getElementById("questionInput").value = "";
    document.getElementById("answerInput").value = "";
  } else {
    alert("Please enter both a question and an answer.");
  }
}
document.getElementById("addQuestionButton").addEventListener("click", addnew);
