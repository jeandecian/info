const username = "jeandecian";
const url = `https://api.github.com/users/${username}/repos`;
const reposListId = "github-repos";

async function fetchRepos() {
  const reposList = document.getElementById(reposListId);
  if (!reposList) return;
  reposList.innerHTML = "";

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(response.statusText);

    const repos = await response.json();
    repos.forEach((repo) => {
      const repoItem = document.createElement("li");
      repoItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      reposList.appendChild(repoItem);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchRepos();
