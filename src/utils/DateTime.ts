export const dateTimeIntl = (datetime: Date) => {
  return Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'long'
  }).format(datetime)
}

export const getCurrentDate = () => {
  const dateWeekLookup: { [key: number]: string } = {
    0: 'Domingo',
    1: 'Segunda-Feira',
    2: 'Terça-Feira',
    3: 'Quarta-Feira',
    4: 'Quinta-Feira',
    5: 'Sexta-Feira',
    6: 'Sábado'
  }

  const monthLookup: { [key: number]: string } = {
    0: 'Jan',
    1: 'Fev',
    2: 'Mar',
    3: 'Abr',
    4: 'Mai',
    5: 'Jun',
    6: 'Jul',
    7: 'Ago',
    8: 'Set',
    9: 'Out',
    10: 'Nov',
    11: 'Dez'
  }

  const currentDate = new Date()
  const day = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const dayWeek = currentDate.getDay()

  return `${day < 10 ? '0' + day : day} ${monthLookup[month]} ${year}, ${dateWeekLookup[dayWeek]}`
}
