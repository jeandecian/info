const username = "jeandecian";
const url = `https://api.github.com/users/${username}/repos`;
const reposListId = "github-repos";

async function fetchRepos() {
  const reposList = document.getElementById(reposListId);
  if (!reposList) return;
  reposList.innerHTML = "";

  try {
    let allRepos = [];
    let page = 1;
    while (true) {
      const response = await fetch(`${url}?per_page=100&page=${page}`);
      if (!response.ok) throw new Error(response.statusText);

      const repos = await response.json();
      if (repos.length === 0) break;
      allRepos = allRepos.concat(repos);
      page++;
    }

    allRepos.forEach((repo) => {
      const repoItem = document.createElement("li");
      repoItem.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      reposList.appendChild(repoItem);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchRepos();
