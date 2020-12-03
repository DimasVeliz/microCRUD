const baseCRUD = (model) => ({
    ...baseGet(model),
    ...baseGetAll(model),
    ...baseCreate(model),
    //...baseUpdate(model),
    //...baseDelete(model)

});

const baseGet = (model) => ({
    get: async (id) => {
        try {
            let item = await model.findById(id);
            return {
                error: false,
                statusCode: 200,
                item
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 400,
                error
            };
        }

    }
});
const baseGetAll = (model) => ({
    getAll: async () => {
       

        try {
            let items = await model.find();
            return {
                error: false,
                statusCode: 200,
                items
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 400,
                error
            };
        }

    }
});

const baseCreate = (model) => ({
    create: async (dataToInsert) => {
        try {
            let items = await model.create(dataToInsert);
            return {
                error: false,
                statusCode: 200,
                items
            };
        } catch (error) {
            return {
                error: true,
                statusCode: 500,
                error
            };
        }

    }
});


module.exports = {
    baseGet,
    baseGetAll,
    //baseDelete,
    //baseUpdate,
    baseCreate,
    baseCRUD
}