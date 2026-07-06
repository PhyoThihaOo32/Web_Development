// seed.js — resets the Quotes table and inserts sample data.
// Run with: node seed.js
//
// Requires db/index.js and models/Quote.js to be complete first.

const db = require('./db')
const Quote = require('./models/Quote')

const quotes = [
  { text: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { text: 'In the middle of every difficulty lies opportunity.', author: 'Albert Einstein' },
  { text: 'It always seems impossible until it is done.', author: 'Nelson Mandela' },
]

async function seed() {
  // force: true drops and recreates the table — only use this in a seed script
  await db.sync({ force: true })
  await Quote.bulkCreate(quotes)
  console.log(`Seeded ${quotes.length} quotes.`) // should log 3
  process.exit()
}

seed()
