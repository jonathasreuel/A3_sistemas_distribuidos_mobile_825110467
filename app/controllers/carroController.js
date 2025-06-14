const { Carro } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const carros = await Carro.findAll();
      res.json(carros);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao listar carros', detalhes: err.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const carro = await Carro.findByPk(req.params.id);
      if (!carro) return res.status(404).json({ erro: 'Carro não encontrado' });
      res.json(carro);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar carro', detalhes: err.message });
    }
  },

  async criar(req, res) {
    try {
      const novo = await Carro.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ erro: 'Erro ao criar carro', detalhes: err.message });
    }
  },

  async atualizar(req, res) {
    try {
      const [atualizado] = await Carro.update(req.body, { where: { id: req.params.id } });
      if (atualizado) {
        res.status(200).json({ mensagem: 'Carro atualizado com sucesso!' });
      } else {
        res.status(404).json({ erro: 'Carro não encontrado' });
      }
    } catch (err) {
      res.status(400).json({ erro: 'Erro ao atualizar carro', detalhes: err.message });
    }
  },

  async atualizarParcial(req, res) {
    try {
      const carro = await Carro.findByPk(req.params.id);
      if (!carro) return res.status(404).json({ erro: 'Carro não encontrado' });

      await carro.update(req.body);
      res.status(200).json({ mensagem: 'Carro atualizado parcialmente com sucesso!' });
    } catch (err) {
      res.status(400).json({ erro: 'Erro ao atualizar parcialmente', detalhes: err.message });
    }
  },

  async remover(req, res) {
    try {
      const removido = await Carro.destroy({ where: { id: req.params.id } });
      if (removido) {
        res.status(200).json({ mensagem: 'Carro removido com sucesso!' });
      } else {
        res.status(404).json({ erro: 'Carro não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao remover carro', detalhes: err.message });
    }
  }
};
