export function GET(req, res, url, payload) {
   res.json({
      message:
         "Hey, guys! Do you know that I'm kindest among you all? Cause I got 3 hearts 🐙",
   })
}

export function POST(req, res, url, payload) {
   res.json(payload)
}
