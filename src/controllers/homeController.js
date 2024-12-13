const connection = require('../config/database');
const { getAllUsers, updateUser, getUserById, deleteUser } = require('../services/CRUDServices');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { users: results });
}

const getTestPage = (req, res) => {
    res.render('sample.ejs')
}

const getCreate = (req, res) => {
    res.render('create.ejs')
}
const postCreateUser = async (req, res) => {
    const { email, name, city } = req.body;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
        [email, name, city],
    );
    res.send("User created successfully");

};

const postUpdateUser = async (req, res) => {
    const { email, name, city, id } = req.body;
    await updateUser(id, email, name, city);
    res.redirect('/');
}


const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);
    res.render('delete.ejs', { user: user })
    // res.send('User deleted successfully');
}

const postHandleRemoveUser = async (req, res) => {
    await deleteUser(req.body.id);
    res.redirect('/')
}

const getEdit = async (req, res) => {
    const userId = req.params.id;
    const user = await getUserById(userId);
    res.render('edit.ejs', { user: user });
}


module.exports = {
    getHomePage,
    getTestPage,
    postCreateUser,
    getCreate,
    getEdit,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}