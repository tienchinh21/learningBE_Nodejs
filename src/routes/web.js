const express = require('express');
const { getHomePage, getTestPage, postCreateUser, getCreate, getEdit, postUpdateUser, postDeleteUser, postHandleRemoveUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);

router.get('/test', getTestPage);

router.get('/create', getCreate);

router.post('/create-user', postCreateUser);

router.get('/edit/:id', getEdit);


router.post('/edit-user', postUpdateUser);

router.post('/delete-user/:id', postDeleteUser);
router.post('/delete-user', postHandleRemoveUser);






module.exports = router;