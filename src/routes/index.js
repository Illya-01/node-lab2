export function GET(req, res, url, payload) {
   const ip = res.socket.remoteAddress
   const port = res.socket.remotePort

   res.json({
      message: `Path: ${url.pathname}. Your IP: ${ip}. Your port: ${port}.`,
   })
}

export function POST(req, res, url, payload) {
   res.json(payload)
}

export function OPTIONS(req, res, url, payload) {
   res.json({ message: 'OPTIONS request' })
}
