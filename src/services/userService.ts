import getConnection from "../config/database"
const pool = getConnection()

const handleCreateUser = async (
    userName: String,
    userEmail: String,
    userAddress: String,
) => {
    try {
        const [result] = await pool.query(`INSERT INTO Users(name,email,address) VALUES(?,?,?)`, [userName, userEmail, userAddress])
        console.log(">>>> INSERT INTO, ", result)
        return result;
    }
    catch (err) {
        console.log(err)
        return []
    }
}

const handleGetAllUser = async () => {
    const [result] = await pool.query(`SELECT * FROM Users`)
    console.log(result)
    return result
}

export {
    handleCreateUser, handleGetAllUser
}