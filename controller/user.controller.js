export const UserSignUp = async (req, res, next) => {
    try {

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Errro", status: false })
    }
}