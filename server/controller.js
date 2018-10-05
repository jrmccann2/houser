module.exports = {

    get: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
    
        dbInstance.get_houses()
          .then( houses => res.status(200).send( houses ) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        } );
    },

    post: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const {name, address, city, state, zip} = req.body;
    
        dbInstance.create_house([ name, address, city, state, zip ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
        } );
    },

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;
    
        dbInstance.delete_house([ id ])
          .then( () => res.sendStatus(200) )
          .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
            console.log(err)
          } );
    }

}