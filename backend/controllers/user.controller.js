import User from "../models/user.model.js";

export const getUsersForSideBar = async (req,res) => {
    try{
        const loggedInUserId = req.user._id

        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password")

        return res.status(200).json(filteredUsers)

    }catch(e){
        console.log(e);

        res.status(500).json({
            error: "Server error",
        });
    }
}

// export default getUsersForSideBar