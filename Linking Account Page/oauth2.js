const btn = document.getElementById("link-psn-btn");

function alertMessage() {
    alert("Redirecting to Playstation Login...");
  }

const Redirecting = () => {
  btn.addEventListener('click', alertMessage);
}

Redirecting();