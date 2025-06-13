const { Carro } = require('../models');

module.exports = {
  async listar(req, res) {
    const carros = await Carro.findAll();
    res.json(carros);
  },

  async buscarPorId(req, res) {
    const carro = await Carro.findByPk(req.params.id);
    if (!carro) return res.status(404).json({ erro: 'Carro não encontrado' });
    res.json(carro);
  },

  async criar(req, res) {
    try {
      const novo = await Carro.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ erro: err.message });
    }
  },

  async atualizar(req, res) {
    const [atualizado] = await Carro.update(req.body, { where: { id: req.params.id } });
    atualizado ? res.sendStatus(204) : res.status(404).json({ erro: 'Carro não encontrado' });
  },

  async atualizarParcial(req, res) {
    const carro = await Carro.findByPk(req.params.id);
    if (!carro) return res.status(404).json({ erro: 'Carro não encontrado' });
    await carro.update(req.body);
    res.sendStatus(204);
  },

  async remover(req, res) {
    const removido = await Carro.destroy({ where: { id: req.params.id } });
    removido ? res.sendStatus(204) : res.status(404).json({ erro: 'Carro não encontrado' });
  }
};
