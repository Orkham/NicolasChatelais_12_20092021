import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Main from '../../src/components/Body'
import PropTypes from 'prop-types'

import {
  getAverageSessions,
  GetId,
  getKeyDatas,
  getPerformance,
  getTodayScore,
  getUserActivity,
  getUserInformations,
} from '../service/api'

export default function UserPage() {
  const id = GetId()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [keyData, setKeyData] = useState({})
  const [userActivity, setUserActivity] = useState([])
  const [averageSessions, setAverageSessions] = useState([])
  const [performance, setPerformance] = useState([])
  const [todayScore, setTodayScore] = useState([])
  useEffect(
    () => {
      const getData = async () => {
        await getUserInformations(id).then((res) => setData(res))
        await getKeyDatas(id).then((res) => setKeyData(res))
        await getUserActivity(id).then((res) => setUserActivity(res))
        await getAverageSessions(id).then((res) => setAverageSessions(res))
        await getPerformance(id).then((res) => setPerformance(res))
        await getTodayScore(id)
          .then((res) => setTodayScore(res))
          .then(() => setIsLoading(false))
      }
      getData(id)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

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
