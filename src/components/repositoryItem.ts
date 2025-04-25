import { Repository } from "../models/repository";

export function repositoryItemHtml(repository: Repository, parentDiv: HTMLDivElement): void {
    const titleAndUrl = document.createElement('div');
    titleAndUrl.className = 'titleAndUrl';

    const title = document.createElement('h2');
    title.innerText = `${repository.name}`

    const url = document.createElement('a');
    url.href = `${repository.url}`;
    url.innerText = `${repository.url}`;

    const starsDiv = document.createElement('div');
    starsDiv.className = 'stars'

    const starsCount = document.createElement('p');
    starsCount.innerText = `${repository.stars}`

    const starImg = document.createElement('img');
    starImg.src = 'star-svgrepo-com.svg'

    titleAndUrl.appendChild(title);
    titleAndUrl.appendChild(url);

    starsDiv.appendChild(starsCount);
    starsDiv.appendChild(starImg);

    const repositoryItem = document.createElement('div');
    repositoryItem.className = 'repositoryItem';

    repositoryItem.appendChild(titleAndUrl);
    repositoryItem.appendChild(starsDiv);

    parentDiv.appendChild(repositoryItem);
}

