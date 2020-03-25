function validSchema(validation) {
    if (validation.error) {
        error = validation.error.details[0].message;
        return Boom.badRequest(error);
    }
    return false;
}

module.exports = validSchema;