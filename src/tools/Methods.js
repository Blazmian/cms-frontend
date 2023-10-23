export const getRelativeTime = (dateTime) => {
  const currentDate = new Date()
  const targetDate = new Date(dateTime)

  const timeDifference = currentDate - targetDate
  const minutes = Math.floor(timeDifference / (1000 * 60))
  const hours = Math.floor(timeDifference / (1000 * 60 * 60))
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  if (minutes < 1) {
    return "Hace menos de un minuto"
  } else if (minutes < 60) {
    return `Hace ${minutes} ${minutes === 1 ? "minuto" : "minutos"}`
  } else if (hours < 24) {
    return `Hace ${hours} ${hours === 1 ? "hora" : "horas"}`
  } else if (days < 2) {
    return `Ayer a las ${targetDate.toLocaleTimeString()}`
  } else {
    return `Hace ${days} ${days === 1 ? "día" : "días"}`
  }
}

export const calculateTimeRemaining = (date, hour) => {
  let dateTimeTarget = date + ' ' + hour
  const targetDate = new Date(dateTimeTarget)
  const currentDate = new Date()
  const timeDifference = targetDate - currentDate

  if (timeDifference <= 0) {
    return ['0', '0', '0', '0']
  } else {
    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hoursRemaining = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesRemaining = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000)

    return [daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining]
  }
}

export const convertHour = (hour24) => {
  const hourParts = hour24.split(':')
  let hours = parseInt(hourParts[0], 10)
  const minutes = hourParts[1]
  let period = 'am'

  if (hours > 12) {
    hours -= 12
    period = 'pm'
  }

  return `${hours}:${minutes} ${period}`
}

export const calculateDifferenceInDays = (date1, date2) => {
  const oneDay = 24 * 60 * 60 * 1000
  const firstDate = new Date(date1)
  const secondDate = new Date(date2)

  const differenceInDays = Math.round(
    (secondDate - firstDate) / oneDay
  )

  return differenceInDays
}

export const convertDate = (date) => {
  const daysOfTheWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
  const monthsOfTheYear = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

  const dateObj = new Date(date)
  const dayWeek = daysOfTheWeek[dateObj.getDay()]
  const dayMonth = dateObj.getDate()
  const month = monthsOfTheYear[dateObj.getMonth()]
  const year = dateObj.getFullYear()

  const formatDate = `${dayWeek} ${dayMonth} de ${month} de ${year}`

  const actualDate = new Date()
  const differenceInDays = calculateDifferenceInDays(actualDate, dateObj)
  const restingDays = differenceInDays === 0 ? 'hoy' : `${differenceInDays} días`

  return `${formatDate} (${restingDays})`
}