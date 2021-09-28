//import React, { useEffect, useState } from 'react'
import { useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import Body from '../../src/components/Body'
import { getFirstName, GetId } from '../service/api'
import { getUserInformations } from '../service/api'

export default function UserPage() {
  const id = GetId()

  const [name, setName] = useState('')
  useEffect(() => {
    getFirstName(id).then((res) => setName(res))
  })

  const [userInformations, setUserInformations] = useState({})
  useEffect(() => {
    getUserInformations(id).then((res) => setUserInformations(res))
  }, [])

  const data = { name, ...userInformations }
  console.log(data)

  return <Body id={GetId()} name={name} info={userInformations} />
}
