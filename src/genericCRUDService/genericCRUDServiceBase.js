

const baseCRUDService = (Service)=>({
    ...baseServiceGet(Service),
    ...baseServiceGetAll(Service),
    ...baseServiceCreate(Service),
    //...baseServiceUpdate(model),
    //...baseServiceDelete(model)

});

const baseServiceGet =(Service)=>({
    get: async (req,res)=>{
        let {id} = req.query;
        
        let response= await Service.get(id);

        if (response.error) {
            return res.status(response.statusCode).send(response);
        } else {
            return res.status(200).send(response);
            
        }


    }
});

const baseServiceGetAll =(Service)=>({
    getAll: async (req,res)=>{
        

        let response= await Service.getAll();

        if (response.error) {
            return res.status(response.statusCode).send(response);
        } else {
           

            return res.status(200).send(response);
            
        }


    }
});

const baseServiceCreate =(Service)=>({
    create: async (req,res)=>{
        let dataToInsert = req.body;
        
        let response= await Service.create(dataToInsert);

        if (response.error) {
            return res.status(response.statusCode).send(response);
        } else {
            return res.status(200).send(response);
            
        }


    }
});

module.exports ={
    baseServiceGet,
    baseServiceGetAll,
    baseServiceCreate,
    //baseServiceUpdate,
    //baseServiceDelete,
    baseCRUDService
}