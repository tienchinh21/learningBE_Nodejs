const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users`
    )
    return results;
};

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ?`,
        [userId]
    )
    let user = userId && userId.length > 0 ? results[0] : null;
    return user;
}

const updateUser = async (id, email, name, city) => {
    let [results, fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
        [email, name, city, id]
    )
}

const deleteUser = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`,
        [id]
    )

    return results;
}
module.exports = {
    getAllUsers,
    updateUser,
    getUserById,
    deleteUser
}