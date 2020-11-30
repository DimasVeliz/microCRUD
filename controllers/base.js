const baseCRUD= (model)=>({
    ...baseGet(model),
    ...baseGetAll(model),
    ...baseCreate(model),
    ...baseUpdate(model),
    ...baseDelete(model)


});

module.exports={
    baseGet,
    baseGetAll,
    baseUpdate,
    baseDelete,
    baseCreate,
    baseCRUD
};