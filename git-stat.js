const GitHub = require('github-scraper-js')
const Objects = require('small-node-collections').Objects

const CronJob = require('cron').CronJob
const fs = require('fs')
const mkdirp = require('mkdirp')

const CONFIG_FILE = './github.config.json'

const writeGitJSON = (config) => {
  let json = JSON.parse(fs.readFileSync(config, 'UTF8'))
  let jsonFile = json.target_file
  if (fs.existsSync(jsonFile)) {
    fs.unlinkSync(jsonFile)
  }
  let dir = jsonFile.substring(0, jsonFile.lastIndexOf('/'))
  if (!fs.existsSync(dir)) {
    mkdirp.sync(dir)
  }
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

let run = () => {
  writeGitJSON(CONFIG_FILE)
    .then(() => console.log('Updated github.json'))
    .catch(err => console.log('Failed to write github.json', err))
}

if (process.env.APP_ENVIRONMENT === 'production') {
  new CronJob('00 00 * * *', () => {
    run()
  }, null, false, 'America/Phoenix', this, true).start()
} else {
  run()
}
