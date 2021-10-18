import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Main from '../../src/components/Body'
import PropTypes from 'prop-types'
import ErrorPage from './ErrorPage'
import {
  getAverageSessions,
  GetId,
  getKeyDatas,
  getPerformance,
  getTodayScore,
  getUserActivity,
  getUserInformations,
} from '../service/api'

/**
 * @return l'affichage principal de la page en ayant récupéré les données auprès de l'api
 */

export default function UserPage() {
  const id = GetId()
  //valeur tampon retardant le déclenchement de l'affichage jusqu'au chargement final des données
  const [isLoading, setIsLoading] = useState(true)
  //ensemble des données de l'user à charger et à traiter pour l'affichage des graphiques
  const [data, setData] = useState([])
  const [keyData, setKeyData] = useState({})
  const [userActivity, setUserActivity] = useState([])
  const [averageSessions, setAverageSessions] = useState([])
  const [performance, setPerformance] = useState([])
  const [todayScore, setTodayScore] = useState([])
  //déclenchement de la récupération des données au chargement initial de la page

  useEffect(
    () => {
      const getData = async () => {
        try {
          await getUserInformations(id).then((res) => setData(res))
        } catch {
          setIsLoading(false)
          return <ErrorPage />
        }
        try {
          await getKeyDatas(id).then((res) => setKeyData(res))
        } catch {
          setIsLoading(false)
          return <ErrorPage />
        }
        try {
          await getUserActivity(id).then((res) => setUserActivity(res))
        } catch {
          setIsLoading(false)
          return <ErrorPage />
        }
        try {
          await getAverageSessions(id).then((res) => setAverageSessions(res))
        } catch {
          setIsLoading(false)
          return <ErrorPage />
        }
        try {
          await getPerformance(id).then((res) => setPerformance(res))
        } catch {
          setIsLoading(false)
          return <ErrorPage />
        }
        try {
          await getTodayScore(id)
            .then((res) => setTodayScore(res))
            .then(() => setIsLoading(false))
        } catch {
          setIsLoading(false)
          return <ErrorPage />
        }
      }
      try {
        getData(id)
      } catch {
        return <ErrorPage />
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  try {
    return (
      <Main
        userData={data}
        isLoading={isLoading}
        keyData={keyData}
        userActivity={userActivity}
        averageSessions={averageSessions}
        performance={performance}
        todayScore={todayScore}
      />
    )
  } catch {
    return <ErrorPage />
  }
}

UserPage.propTypes = {
  userData: PropTypes.object,
  isLoading: PropTypes.bool,
  keyData: PropTypes.object,
  userActivity: PropTypes.array,
  averageSessions: PropTypes.array,
  performance: PropTypes.array,
  todayScore: PropTypes.array,
}
