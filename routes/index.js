/**
 * @swagger
 * /:
 *   get:
 *     summary: Retorna uma mensagem de boas-vindas
 *     responses:
 *       200:
 *         description: Sucesso
 */
 app.get('/', (req, res) => {
    res.send('Hello, ISAAC!');
  });
  