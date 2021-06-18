// REQUIRED: set script property "GITHUB_TOKEN" with following scopes: "repo" and "workflow"

const endpoint = "https://api.github.com/repos/tusvml/blog/dispatches"

const doGet = (e) => {
  deploy()
  message()
}

const doPost = (e) => {
  deploy()
  message()
}

const deploy = () => {
  const token = PropertiesService.getScriptProperties().getProperty(
    "GITHUB_TOKEN"
  )

  const payload = {
    event_type: "deploy-from-google-apps-script",
  }

  const data = {
    method: "post",
    headers: {
      Authorization: `token ${token}`,
    },
    payload: JSON.stringify(payload),
  }

  UrlFetchApp.fetch(endpoint, data)
}

const message = () => {
  ContentService.createTextOutput("Building blog...\n")
}
