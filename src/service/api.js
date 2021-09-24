export async function getUserInformations(id) {
  const res = await fetch('http://localhost:3000/user/' + id)
  const data = await res.json()
  return data.data
}

/* async function displayResults() {
  const result = await getUserInformations(12)
  console.log(result)
}

displayResults() */

async function getFirstName(id) {
  const data = await getUserInformations(id)
  //console.log(data.userInfos.firstName)
  return data.userInfos.firstName
}
getFirstName(12)

async function getKeyDatas(id) {
  const data = await getUserInformations(id)
  //console.log(data.keyData)
  return data.keyData
}
getKeyDatas(12)

/**********************************************/

async function getUserActivity(id) {
  const res = await fetch('http://localhost:3000/user/' + id + '/activity')
  const data = await res.json()
  //console.log(data.data.sessions)
  return data.data.sessions
}

getUserActivity(12)

/*******************************************/

async function getAverageSessions(id) {
  const res = await fetch(
    'http://localhost:3000/user/' + id + '/average-sessions'
  )
  const data = await res.json()
  //console.log(data.data.sessions)
  return data.data
}

getAverageSessions(12)

/*************************************/

async function getPerformance(id) {
  const res = await fetch('http://localhost:3000/user/' + id + '/performance')
  const data = await res.json()
  //console.log(data.data.data)
  return data.data.data
}

getPerformance(12)

/********************************************/
