const GitHubClient = require('./GitHubClient')

const gitHubClient = new GitHubClient(process.env['GITHUB_ACCESS_TOKEN'])

function forUser(user) {
  return contributionsByUser(user, 1).then(extractRepositories)
}

function contributionsByUser(user, page) {
  return gitHubClient.contributions(user, page).then(contributionsJson => {
    if (contributionsJson.items && contributionsJson.items.length > 0) {
      return contributionsByUser(user, page + 1)
        .then(moreItems => contributionsJson.items.concat(moreItems))
    } else {
      return []
    }
  })
}

function contributions(user, page) {
  return gitHubClient.contributions(user, page)
}

function extractRepositories(contributions) {
  return new Set(
    contributions.map(contribution => contribution.repository.name)
  )
}

module.exports = {
  forUser: forUser
}
