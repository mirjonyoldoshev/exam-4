const url =
  "https://blogpost-server-production-d92d.up.railway.app/api/v1/user/login";

const form = document.querySelector(".formLogin");
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

  let email = e.target[0].value;
  let password = e.target[1].value;

  const data = {
    email: email,
    password: password,
  };

  axios
    .post(url, data)
    .then((response) => {
      console.log("Success", response.data);
      const token = response.data.token; 
      localStorage.setItem('token', token);
      window.location.href = "/src/pages/dashboard.html";
    })
    .catch((error) => {
      console.error("Error", error);
    });
});
