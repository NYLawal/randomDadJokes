const axios = require('axios');
const config = {
  method: 'get',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke?rapidapi-key=f4a6a45436msh3df8c039e011d60p18d8a9jsn9f93913dba72',
}

module.exports = {
  getNewJoke: async (req, res) => {
      const response = await axios(config)
      return res.status(200).json({
      new_joke: {
        id: response.data.body[0]._id,
        punchline: response.data.body[0].punchline,
        setup: response.data.body[0].setup,
      },
      message: "successfully returned",
    })
  },

  getNewJokeDetailed: async (req, res) => {
    let response = await axios(config)
    return res.status(200).json(response.data)
  },
}


