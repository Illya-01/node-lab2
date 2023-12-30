import * as http from 'node:http'
import router from './src/router.js'
import defaultHandler from './src/defaultHandler.js'
import notFoundHandler from './src/pageNotFoundHandler.js'
import helpers from './src/helpers.js'
import { safeJSON } from './src/utils.js'

const processedContentTypes = {
   'text/html': text => text,
   'text/plain': text => text,
   'application/json': json => safeJSON(json, {}),
   'application/x-www-form-urlencoded': data =>
      Object.fromEntries(new URLSearchParams(data)),
}

/**
 * Creates an HTTP server and handles incoming requests.
 *
 * @param {http.IncomingMessage} req - The incoming request object.
 * @param {http.ServerResponse} res - The server response object.
 * @returns {void}
 */
const server = http.createServer(async (req, res) => {
   const url = new URL(req.url || '/', `https://${req.headers.host}`)
   const routeModule = router.get(url.pathname) ?? notFoundHandler
   const handler = routeModule[req?.method] ?? defaultHandler

   console.log('🪵  ~ server ~ routeModule:', routeModule)
   console.log('🪵  ~ server ~ handler:', handler)

   let payload = {}
   let rawRequest = ''
   for await (const chunk of req) {
      rawRequest += chunk
   }

   if (req.headers['content-type']) {
      const contentType = req.headers['content-type'].split(';')[0]
      if (processedContentTypes[contentType]) {
         payload = processedContentTypes[contentType](rawRequest)
      }
   }

   try {
      handler(req, Object.assign(res, helpers), url, payload, rawRequest)
   } catch (err) {
      res.statusCode = 500
      res.end(process.env.NODE_ENV === 'production' ? 'Server Error :(' : err.stack)
      console.error(err)
   }
})

server.listen(process.env.PORT || 3000)

process.on('SIGINT', () => {
   server.close(error => {
      if (error) {
         console.error(error)
         process.exit(1)
      }
   })
})
