import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Main from '../../src/components/Body'
import { GetId, getKeyDatas, getFirstName } from '../service/api'
import { getUserInformations } from '../service/api'

export default function UserPage() {
  const id = GetId()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      await getUserInformations(id)
        .then((res) => setData(res))
        .then(() => setIsLoading(false))
    }
    getData(id)
  }, [])
  //console.log(data)

  /* const [name, setName] = useState('')
  async function getName() {
    const res = await getFirstName(id)
    setName(res)
  }
  useEffect(() => {
    getName()
  }, []) */

  /* useEffect(() => {
    getFirstName(id).then((res) => setName(res))
  }, [id, name]) */

  /* const [userInformations, setUserInformations] = useState()
  async function getInfo() {
    const res = await getUserInformations(id)
    setUserInformations(res)
  }
  useEffect(() => {
    getInfo()
  }, []) */

  /* useEffect(() => {
    fetch('http://localhost:3000/user/' + id)
      .then((res) => res.json())
      .then((res) => setUserInformations(res))
  }, []) */

  /* const [keyData, setKeyData] = useState({})
  useEffect(
    () => {
      getKeyDatas(id).then((res) => setKeyData(res))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  ) */

  //const data = { name, ...userInformations }
  //console.log(userInformations)

  return (
    <Main
      /*name={name}*/ userData={data}
      isLoading={isLoading} /*keyData={keyData}*/
    />
  )
}
