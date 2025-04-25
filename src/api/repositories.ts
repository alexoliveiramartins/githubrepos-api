// https://api.github.com/repos/alexoliveiramartins/linketinder
// https://api.github.com/repos/{user}/{repository}
// https://api.github.com/users/alexoliveiramartins/repos
// https://api.github.com/users/{user}/repos

import axios from 'axios';
import { Repository } from '../models/repository';

export async function getRepos(searchParam: String): Promise<Repository[]> {
    let repositoriesArray: Repository[] = [];
    try {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchParam}+in:name&sort=stars&order=desc`)
        const repos = response.data.items;
        repos.forEach((element: any) => {
            let repository = new Repository(element.name, element.stargazers_count, element.html_url)
            repositoriesArray.push(repository)
            console.log(element);
        });
    }
    catch (error) {
        console.log(error);
    }

    return repositoriesArray;
}
