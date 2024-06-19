const url =
  "https://blogpost-server-production-d92d.up.railway.app/api/v1/user/register";

const form = document.querySelector(".formRegister");
const eye = document.querySelector(".checkEye");
const password = document.querySelector("#password");

eye.addEventListener("click", () => {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  eye.classList.toggle("bxs-show");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = e.target[0].value;
  let email = e.target[1].value;
  let password = e.target[2].value;

  const data = {
    name: name,
    email: email,
    password: password,
  };

  axios
    .post(url, data)
    .then((response) => {
      console.log("Success", response.data);
      window.location.href = "/src/pages/dashboard.html";
    })
    .catch((error) => {
      console.error("Error", error);
    });
});
