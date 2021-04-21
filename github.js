class GitHub {
    constructor() {
        this.client_id = '984b6a157cc191e96ef0';
        this.client_secret = '8227570d6ecf5c344f3620e540f6966ae725ab59';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

   async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profileData = await profileResponse.json();
        const repoData = await repoResponse.json();

        return {
            profile: profileData,
            repos: repoData
        }
   }
}
