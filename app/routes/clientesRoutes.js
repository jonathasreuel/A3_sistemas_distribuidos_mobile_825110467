const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientesController');

router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);
router.post('/', controller.criar);
router.put('/:id', controller.atualizar);
router.patch('/:id', controller.atualizarParcial);
router.delete('/:id', controller.remover);

module.exports = router;
