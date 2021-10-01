import { useParams } from 'react-router'

export async function getUserInformations(id) {
  const res = await fetch('http://localhost:3000/user/' + id)
  const data = await res.json()
  return data.data
}

export async function getFirstName(id) {
  const data = await getUserInformations(id)
  //console.log(data.userInfos.firstName)
  return data.userInfos.firstName
}

export async function getKeyDatas(id) {
  const data = await getUserInformations(id)
  //console.log(data.keyData)
  return data.keyData
}

export async function getTodayScore(id) {
  const score = await getUserInformations(id)
  const result = [{ name: 'Score', value: score.todayScore * 100 }]
  return result
}
/**********************************************/

export async function getUserActivity(id) {
  const res = await fetch('http://localhost:3000/user/' + id + '/activity')
  const data = await res.json()
  const result = data.data.sessions
  result.sort((a, b) => {
    let dateA = new Date(a.day)
    let dateB = new Date(b.day)
    return dateA.getUTCDay() - dateB.getUTCDay()
  })

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

export async function getAverageSessions(id) {
  const res = await fetch(
    'http://localhost:3000/user/' + id + '/average-sessions'
  )
  const data = await res.json()

  return data.data.sessions
}

/*************************************/

export async function getPerformance(id) {
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
export function GetId() {
  let { id } = useParams()
  return id
}
