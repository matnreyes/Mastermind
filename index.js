const axios = require('axios')

const baseUrl = 'https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain'

axios.get(baseUrl)
  .then((response) => console.log(response.data))
