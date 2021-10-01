import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Main from '../../src/components/Body'
import {
  getAverageSessions,
  GetId,
  getKeyDatas,
  getPerformance,
  getTodayScore,
  getUserActivity,
} from '../service/api'
import { getUserInformations } from '../service/api'

export default function UserPage() {
  const id = GetId()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [keyData, setKeyData] = useState([])
  const [userActivity, setUserActivity] = useState([])
  const [averageSessions, setAverageSessions] = useState([])
  const [performance, setPerformance] = useState([])
  const [todayScore, setTodayScore] = useState(0)
  useEffect(
    () => {
      const getData = async () => {
        await getUserInformations(id).then((res) => setData(res))
        //.then(() => setIsLoading(false))
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
