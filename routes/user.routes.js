const router = require('express').Router();
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

// auth
router.post('/register', authController.signUp);
router.post('/login', authController.signIn);
router.get('/logout', authController.logout);

// user DB
router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.delete('/:id', userController.deleteUser);

// user shop cart
router.patch('/addCard/:id', userController.addCard);
router.delete('/deleteCard/:id', userController.deleteCard);

module.exports = router;
