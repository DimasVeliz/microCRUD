const baseGet =(Service)=>({
    get:async (req,res)=>{
        let {id} = req.params;

        let response= await Service.get(id);

        if (response.error) {
            return res.status(response.statusCode).send(response);
        } else {
            return res.status(200).send(response);
        }
    },
});