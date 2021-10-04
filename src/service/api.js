import { useParams } from 'react-router'

/**
 * 
 * @param {integer} id 
 * @return {array} les datas de la bdd en fonction de l'id passé en paramètre
 */
export async function getUserInformations(id) {
  //récupération des données auprès de l'api exécuté sur le port :3000
  const res = await fetch('http://localhost:3000/user/' + id)
  const data = await res.json()
  return data.data
}

/**
 * @param {integer} id 
 * @return {string} le prénom correspondant à l'id de l'user passé en paramètre
 */
export async function getFirstName(id) {
  const data = await getUserInformations(id)
  return data.userInfos.firstName
}

/**
 * @param {integer} id 
 * @return {array} les données 'key' permettant de récupérer les infos user
 */
export async function getKeyDatas(id) {
  const data = await getUserInformations(id)
  return data.keyData
}

/**
 * @param {integer} id 
 * @return {array} le 'todayScore' pour l'affichage du graphique KPI (objectif)
 */
export async function getTodayScore(id) {
  const score = await getUserInformations(id)
  const result = [{ name: 'Score', value: score.todayScore * 100 }]
  return result
}
/**********************************************/

/**
 * @param {integer} id 
 * @return {array} les données d'activités quotidiennes de l'user classées du lundi au dimanche
 */
export async function getUserActivity(id) {
  //récupération des données auprès de l'api exécuté sur le port :3000
  const res = await fetch('http://localhost:3000/user/' + id + '/activity')
  const data = await res.json()
  const result = data.data.sessions
  //tri des données par date
  result.sort((a, b) => {
    let dateA = new Date(a.day)
    let dateB = new Date(b.day)
    return dateA.getUTCDay() - dateB.getUTCDay()
  })
  //récupération du jour de la semaine et mise en forme
  result.map((day) => {
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

  return result
}

/*******************************************/

/**
 * @param {integer} id 
 * @return {array} données de l'user sur la durée moyenne des sessions
 */
export async function getAverageSessions(id) {
  //récupération des données auprès de l'api exécuté sur le port :3000
  const res = await fetch(
    'http://localhost:3000/user/' + id + '/average-sessions'
  )
  const data = await res.json()

  return data.data.sessions
}

/*************************************/

/**
 * @param {integer} id 
 * @return {array} données de l'user sur les performances classées par thématiques
 */
export async function getPerformance(id) {
  //récupération des données auprès de l'api exécuté sur le port :3000
  const res = await fetch('http://localhost:3000/user/' + id + '/performance')
  const data = await res.json()
  const result = data.data.data
  result.map((kind) => {
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
  return result
}

/********************************************/
/**
 * @return {integer} id passé dans l'url (react-router)
 */
export function GetId() {
  let { id } = useParams()
  return id
}
