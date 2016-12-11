'use strict'

const Rhapsody = require('rhapsody-api')(process.env.NAPSTER_ACCESS_KEY)

Rhapsody.topArtists().then((resp) => {
  console.log(resp)
})

