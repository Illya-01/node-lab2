export function GET(req, res, url, payload) {
   res.json({
      message: 'Welcome to our wonderful Zoo 🤠!',
   })
}

export function POST(req, res, url, payload) {
   res.json(payload)
}
