export function GET(req, res) {
   throw new Error('Oups, smth went wrong!')

   res.json({
      message: 'Test Handler GET',
   })
}

export function PURGE(req, res) {
   res.json({ name: 'Test handlerOptions' })
}
