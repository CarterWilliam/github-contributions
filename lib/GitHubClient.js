'use strict';

const HttpClient = require('./HttpClient')

const GITHUB_API_URL = 'https://api.github.com'
const GITHUB_API_HEADERS = {
  'Accept': 'application/vnd.github.cloak-preview',
  'User-Agent': 'will-carter-fetch-contributions'
}

const httpClient = new HttpClient()

class GitHubClient {

  constructor(accessToken) {
    this.accessToken = accessToken
  }

  contributions(user, page) {
    const contributionsUrl = `${GITHUB_API_URL}/search/commits?q=author:${user} is:private&page=${page}&access_token=${this.accessToken}`
    console.log(contributionsUrl)
    return httpClient.get(contributionsUrl, GITHUB_API_HEADERS).then((response) => {
      return JSON.parse(response.body)
    })
  }

}

module.exports = GitHubClient
