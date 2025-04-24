import './styles/style.css'

import { getRepos } from "./api/repositories";
import { Repository } from "./models/repository";
import { repositoryItemHtml } from './components/repositoryItem';

let repositoriesList: Repository[];

document.getElementById('repoSearchForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const divElements = document.getElementById('repositories-list') as HTMLDivElement;
    divElements.innerHTML = '';

    repositoriesList = [];

    const input = document.getElementById('repoSearchInput') as HTMLInputElement;
    const username = input.value;

    repositoriesList = await getRepos(username);

    repositoriesList.forEach(repo => {
        repositoryItemHtml(repo, divElements);
    })
})
