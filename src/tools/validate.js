const UserModel = require('../models/user.model');

module.exports.validate = async (decoded, request, h) => {

    try {
        const userExist = await UserModel.findById(decoded.id);

        if (!userExist) return {isValid: false};

        return {isValid: true};
    } catch (error) {
        console.log(err);
        return {isValid: false};
    }
    
}