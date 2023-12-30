export function GET(req, res, url, payload) {
   res.json({
      message: "Do you like banana 🍌, 'cause I do 🐵",
   })
}

export function POST(req, res, url, payload) {
   res.json(payload)
}
