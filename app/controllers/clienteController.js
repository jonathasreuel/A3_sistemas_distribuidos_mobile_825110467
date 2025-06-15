const { Cliente } = require('../models');

module.exports = {
  async listar(req, res) {
    try {
      const clientes = await Cliente.findAll();
      res.set('Cache-Control', 'public, max-age=180');
      res.json(clientes);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao listar clientes', detalhes: err.message });
    }
  },

  async buscarPorId(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
      res.set('Cache-Control', 'public, max-age=180');
      res.json(cliente);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar cliente', detalhes: err.message });
    }
  },

  async criar(req, res) {
    try {
      const novo = await Cliente.create(req.body);
      res.status(201).json(novo);
    } catch (err) {
      res.status(400).json({ erro: 'Erro ao criar cliente', detalhes: err.message });
    }
  },

  async atualizar(req, res) {
    try {
      const [atualizado] = await Cliente.update(req.body, { where: { id: req.params.id } });
      if (atualizado) {
        res.status(200).json({ mensagem: 'Cliente atualizado com sucesso!' });
      } else {
        res.status(404).json({ erro: 'Cliente não encontrado' });
      }
    } catch (err) {
      res.status(400).json({ erro: 'Erro ao atualizar cliente', detalhes: err.message });
    }
  },

  async atualizarParcial(req, res) {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });

      await cliente.update(req.body);
      res.status(200).json({ mensagem: 'Cliente atualizado parcialmente com sucesso!' });
    } catch (err) {
      res.status(400).json({ erro: 'Erro ao atualizar parcialmente o cliente', detalhes: err.message });
    }
  },

  async remover(req, res) {
    try {
      const removido = await Cliente.destroy({ where: { id: req.params.id } });
      if (removido) {
        res.status(200).json({ mensagem: 'Cliente removido com sucesso!' });
      } else {
        res.status(404).json({ erro: 'Cliente não encontrado' });
      }
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao remover cliente', detalhes: err.message });
    }
  }
};
