import { repositoryItemHtml } from "../components/repositoryItem";
import { Repository } from "../models/repository";
import { getRepos } from "../api/repositories";

export function addSearchEvents(): void {
    let repositoriesList: Repository[];

    document.getElementById('repoSearchForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();

        document.getElementById('repositories-list')?.remove();
        repositoriesList = [];

        const divElements = document.createElement('div');
        divElements.id = 'repositories-list';
        divElements.innerHTML = '';
        document.getElementById('app')?.appendChild(divElements);

        const input = document.getElementById('repoSearchInput') as HTMLInputElement;
        const username = input.value;

        repositoriesList = await getRepos(username);
        repositoriesList.forEach(repo => {
            repositoryItemHtml(repo, divElements);
        })
    })
}