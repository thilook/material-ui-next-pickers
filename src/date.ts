export const fillInDigit = (number:number, digit:number) => {
  const max = Math.pow(10, digit)
  var clean = (number % max).toString()
  while(clean.length < digit) clean = '0' + clean
  return clean
}
export const month = [{
  short: 'Jan',
  long: 'Janeiro'
}, {
  short: 'Fev',
  long: 'Fevereiro'
}, {
  short: 'Mar',
  long: 'Março'
}, {
  short: 'Abr',
  long: 'Abril'
}, {
  short: 'Mai',
  long: 'Maio'
}, {
  short: 'Jun',
  long: 'Junho'
}, {
  short: 'Jul',
  long: 'Julho'
}, {
  short: 'Ago',
  long: 'Agosto'
}, {
  short: 'Set',
  long: 'Setembro'
}, {
  short: 'Out',
  long: 'Outubro'
}, {
  short: 'Nov',
  long: 'Novembro'
}, {
  short: 'Dez',
  long: 'Dezembro'
}]
export const day = [{
    short: 'Dom',
    long: 'Domingo'
  }, {
    short: 'Seg',
    long: 'Segunda-feira'
  }, {
    short: 'Ter',
    long: 'Terça-feira'
  }, {
    short: 'Qua',
    long: 'Quarta-feira'
  }, {
    short: 'Qui',
    long: 'Quinta-feira'
  }, {
    short: 'Sex',
    long: 'Sexta-feira'
  }, {
    short: 'Sab',
    long: 'Sábado'
}]
export const format = (date:Date, format:string) =>
  [[{
    keyword: 'mm',
    word: fillInDigit(date.getMinutes(), 2)
  }, {
    keyword: 'm',
    word: date.getMinutes().toString()
  }], [{
    keyword: 'HH',
    word: fillInDigit(date.getHours(), 2)
  }, {
    keyword: 'H',
    word: date.getHours().toString()
  }], [{
    keyword: 'hh',
    word: fillInDigit(date.getHours() > 12? date.getHours() - 12:date.getHours() === 0? 12:date.getHours(), 2)
  }, {
    keyword: 'h',
    word: (date.getHours() > 12? date.getHours() - 12:date.getHours() === 0? 12:date.getHours()).toString()
  }], [{
    keyword: 'a',
    word: date.getHours() >= 12? 'pm':'am'
  }], [{
    keyword: 'dd',
    word: fillInDigit(date.getDate(), 2)
  }, {
    keyword: 'd',
    word: date.getDate().toString()
  }], [{
    keyword: 'MMMM',
    word: month[date.getMonth()].long
  }, {
    keyword: 'MMM',
    word: month[date.getMonth()].short
  }, {
    keyword: 'MM',
    word: fillInDigit(date.getMonth() + 1, 2)
  }, {
    keyword: 'M',
    word: (date.getMonth() + 1).toString()
  }], [{
    keyword: 'yyyy',
    word: fillInDigit(date.getFullYear(), 4)
  }, {
    keyword: 'yy',
    word: fillInDigit(date.getFullYear(), 2)
  }], [{
    keyword: 'EEE',
    word: day[date.getDay()].short
  }, {
    keyword: 'EEEE',
    word: day[date.getDay()].long
  }]].reduce((dateString, formattings) => {
    let foundFormatting = formattings.find(formatting => dateString.includes(formatting.keyword))
    if(foundFormatting) {
      return dateString.replace(foundFormatting.keyword, foundFormatting.word)
    } else {
      return dateString
    }
  }, format)

export const sameDay = (dateA, dateB) => {
  if(dateA !== undefined && dateB !== undefined) {
    return dateA.getDate() === dateB.getDate() && dateA.getMonth() === dateB.getMonth() && dateA.getFullYear() === dateB.getFullYear()
  } else {
    return false
  }
}
