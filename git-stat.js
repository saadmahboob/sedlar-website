const GitHub = require('github-scraper-js')
const Objects = require('small-node-collections').Objects

const CronJob = require('cron').CronJob
const fs = require('fs')

const writeGitJSON = (config) => {
  let json = JSON.parse(fs.readFileSync(config, 'UTF8'))
  let jsonFile = json.target_file
  let hub = GitHub.fromJSON(json)
  return hub.parseUserRepositories()
    .then(userJSON => {
      hub.parseOrganizationRepositories()
        .then(orgJSON => {
          let minimal = {}
          minimal['repositories'] = userJSON
          Objects.forEach(orgJSON, (key, val) => minimal[key] = val)
          fs.writeFile(jsonFile, JSON.stringify(minimal, null, 2), (err) => {
            if (err) {
              console.log(err)
            }
          })
        })
    })
}

new CronJob('00 00 * * *', () => {
  writeGitJSON('./github.config.json')
  .then(() => console.log('Updated github.json'))
  .catch(err => console.log('Failed to write github.json', err))
}, null, false, 'America/Phoenix', this, true).start()
