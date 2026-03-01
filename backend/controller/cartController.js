import User from "../model/userModel.js";


export const addToCart = async (req, res) => {
    try {
        const { itemId, size } = req.body;

        const userData = await User.findById(req.userId);

        // Check if user exists
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        // Ensure cartData is initialized
        let cartData = userData.cartData || {};

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }

        await User.findByIdAndUpdate(req.userId, { cartData });

        return res.status(201).json({ message: "Added to cart" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "addToCart error" });
    }



}

export const UpdateCart = async (req, res) => {
    try {
        const { itemId, size, quantity } = req.body;

        const userData = await User.findById(req.userId);

        //  User null check
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }

        let cartData = userData.cartData || {};

        //  itemId object create if not exists
        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        // update safely
        cartData[itemId][size] = quantity;

        await User.findByIdAndUpdate(req.userId, { cartData });

        return res.status(200).json({ message: "Cart Updated Successfully" });

    } catch (error) {
        console.log("UpdateCart Error:", error);
        return res.status(500).json({ message: "UpdateCart error" });
    }
};


export const getUserCart = async (req, res) => {
    try {

        const userData = await User.findById(req.userId);

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            cartData: userData.cartData
        });

    } catch (error) {
        console.log("getUserCart error:", error.message);
        return res.status(500).json({
            success: false,
            message: "getUserCart error"
        });
    }
};

