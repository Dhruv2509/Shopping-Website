import express from 'express'
import { createProduct, createProductReview, getTopProducts, updateProduct } from '../controllers/productControllers.js'
import { deleteProduct, getProducts, getProductsById } from '../controllers/productControllers.js'
import { protect,admin } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getProducts).post(protect,admin,createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts);
router.route('/:id').get(getProductsById).delete(protect,admin,deleteProduct).put(protect,admin,updateProduct)




export default router