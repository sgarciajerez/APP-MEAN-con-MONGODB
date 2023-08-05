//rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto.controller');

//api/productos 
router.post ('/', productoController.crearProducto);

router.get('/', productoController.obtenerProductos);

router.put('/:id', productoController.actualizarProducto);

module.exports=router;