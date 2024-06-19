const url = "https://blogpost-server-production-d92d.up.railway.app/api/v1/blogs/";
const form = document.querySelector(".formDashboard");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let title = e.target[0].value;
  let image = e.target[1].value;
  let tags = e.target[2].value.split(" ");
  let description = e.target[3].value;
  let author = "Mirjon Yo'ldoshev";

  const data = {
    title: title,
    image: image,
    tags: tags,
    description: description,
    author: author,
  };

  console.log("Yuborilgan ma'lumotlar:", data);

  const token = localStorage.getItem('token');

  if (!token) {
    console.error("Token mavjud emas.");
    return;
  }

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    console.log("Success", response.data);
    window.location.href = "/index.html";
  } catch (error) {
    console.error("Error", error.response ? error.response.data : error.message);
  }
});
