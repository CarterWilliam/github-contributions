#!/usr/local/bin/node

const repoAccumulator = require('./lib/RepoAccumulator')

require('coa').Cmd()
  .name('contributions')
  .title('GitHub Contributions Finder')
  .helpful()
  .name('repositories')
  .opt()
    .name('username')
    .short('u').long('username')
    .req()
    .end()
  .act((options) => {
    console.log(`Fetching repositories for user '${options.username}'`)
    fetchRepositories(options.username)
  })
  .end()
  .run(process.argv.slice(2))

function fetchRepositories(user) {
  repoAccumulator.forUser(user).then((response) => {
    console.log(response)
  })
}
