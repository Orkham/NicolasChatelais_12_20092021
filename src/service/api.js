import { useParams } from 'react-router'
import {
  PerformanceData,
  SessionData,
  UserActivityDatas,
  UserInformations,
} from './models'

/**
 *
 * @param {integer} id
 * @return {object} UserInformations type. database data from id in param
 */
export async function getUserInformations(id) {
  //datas fetch from api on localhost:3000 port
  const res = await fetch('http://localhost:3000/user/' + id)
  const data = await res.json()
  const userInformation = new UserInformations(data.data)
  return userInformation
}

/**
 * @param {integer} id
 * @return {string}  first name from user informations
 */
export async function getFirstName(id) {
  const data = await getUserInformations(id)
  return data.userInfos.firstName
}

/**
 * @param {integer} id
 * @return {array} user key datas
 */
export async function getKeyDatas(id) {
  const data = await getUserInformations(id)
  return data.keyData
}

/**
 * @param {integer} id
 * @return {array} today score allowing to draw the KPI graphic
 */
export async function getTodayScore(id) {
  const score = await getUserInformations(id)
  const result = [{ name: 'Score', value: score.todayScore * 100 }]
  return result
}
/**********************************************/

/**
 * @param {integer} id
 * @return {array} daily user activities sort from monday to sunday
 */
export async function getUserActivity(id) {
  //datas fetch from api on localhost:3000 port
  const res = await fetch('http://localhost:3000/user/' + id + '/activity')
  const data = await res.json()
  const result = data.data.sessions
  const UserActivity = result.map((data) => new UserActivityDatas(data))

  //datas sort by date
  UserActivity.sort((a, b) => {
    let dateA = new Date(a.day)
    let dateB = new Date(b.day)
    return dateA.getUTCDay() - dateB.getUTCDay()
  })
  //get the day name by number
  UserActivity.map((day) => {
    const date = new Date(day.day)
    const dayNumber = date.getUTCDay()
    switch (dayNumber) {
      case 0:
        day.day = 'L'
        break
      case 1:
        day.day = 'M'
        break
      case 2:
        day.day = 'M'
        break
      case 3:
        day.day = 'J'
        break
      case 4:
        day.day = 'V'
        break
      case 5:
        day.day = 'S'
        break
      case 6:
        day.day = 'D'
        break
      default:
        console.log(
          "Désolé, nous n'avons plus de jour de la semaine en réserve."
        )
    }

    return dayNumber
  })

  return UserActivity
}

/*******************************************/

/**
 * @param {integer} id
 * @return {array} user datas about sessions durations
 */
export async function getAverageSessions(id) {
  ////datas fetch from api on localhost:3000 port
  const res = await fetch(
    'http://localhost:3000/user/' + id + '/average-sessions'
  )
  const data = await res.json()
  const userSessionInformations = data.data.sessions.map(
    (data) => new SessionData(data)
  )
  return userSessionInformations
}

/*************************************/

/**
 * @param {integer} id
 * @return {array} user datas about performances sort par theme
 */
export async function getPerformance(id) {
  //datas fetch from api on localhost:3000 port
  const res = await fetch('http://localhost:3000/user/' + id + '/performance')
  const data = await res.json()
  const result = data.data.data
  const performanceDatas = result.map((data) => new PerformanceData(data))

  performanceDatas.map((kind) => {
    switch (kind.kind) {
      case 1:
        kind.kind = 'Intensité'
        break
      case 2:
        kind.kind = 'Vitesse'
        break
      case 3:
        kind.kind = 'Force'
        break
      case 4:
        kind.kind = 'Endurance'
        break
      case 5:
        kind.kind = 'Energie'
        break
      case 6:
        kind.kind = 'Cardio'
        break
      default:
        console.log(
          "Désolé, nous n'avons pas pu trouver de résultat correspondant."
        )
    }
    return kind.kind
  })
  return performanceDatas
}

/********************************************/
/**
 * @return {integer} id from url (react-router)
 */
export function GetId() {
  let { id } = useParams()
  return id
}
