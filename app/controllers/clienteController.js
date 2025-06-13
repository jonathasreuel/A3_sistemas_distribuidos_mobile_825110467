const { Cliente } = require('../models');

module.exports = {
  async listar(req, res) {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  },

  async buscarPorId(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
    res.json(cliente);
  },

  async criar(req, res) {
    try {
      const novo = await Cliente.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async atualizar(req, res) {
    const [atualizado] = await Cliente.update(req.body, { where: { id: req.params.id } });
    atualizado ? res.sendStatus(204) : res.status(404).json({ erro: 'Cliente não encontrado' });
  },

  async atualizarParcial(req, res) {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
    await cliente.update(req.body);
    res.sendStatus(204);
  },

  async remover(req, res) {
    const removido = await Cliente.destroy({ where: { id: req.params.id } });
    removido ? res.sendStatus(204) : res.status(404).json({ erro: 'Cliente não encontrado' });
  }
};
