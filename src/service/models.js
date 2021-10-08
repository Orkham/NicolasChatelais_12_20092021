export class UserInformations {
  /**
   * Create an object with the user datas
   * @param {*} arrayDatas -
   * id: integer,
   * userInfos : object (age: integer, firstName: string, lastName: string),
   * todayScore : number (from 0 to 1),
   * keyData : object (calorieCount: integer, carbohydrateCount : integer, lipidCount : integer, proteinCount : integer)
   */
  constructor(arrayDatas) {
    this.id = arrayDatas.id
    this.userInfos = arrayDatas.userInfos
    this.todayScore = arrayDatas.todayScore
    this.keyData = arrayDatas.keyData
  }
}

export class UserActivityDatas {
  /**
   * Create an object with the user activity datas
   * @param {*} sessionInformations -
   * calories : integer,
   * day : string,
   * kilogram : integer
   */
  constructor(sessionInformations) {
    this.calories = sessionInformations.calories
    this.day = sessionInformations.day
    this.kilogram = sessionInformations.kilogram
  }
}

export class SessionData {
  /**
   * Create an object with the user's session informations
   * @param {*} sessionInformations -
   * day : string,
   * sessionLength : integer (in minutes)
   */
  constructor(sessionInformations) {
    this.day = sessionInformations.day
    this.sessionLength = sessionInformations.sessionLength
  }
}

export class PerformanceData {
  /**
   * Create an object with the user's performance informations
   * @param {*} performanceData -
   * value : integer,
   * kind : string (name of the performance)
   */
  constructor(performanceData) {
    this.value = performanceData.value
    this.kind = performanceData.kind
  }
}
