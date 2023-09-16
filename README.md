# Character Sheet 

Character Sheet is an app I am creating to blow the dust off of my web development skills. It's a MERN stack app. 

## Installation 

### For development
Run MongoDB from the folder `/docker/mongo/` using `docker compose up -d` with a default username and password of admin/admin
This starts a MongoDB server on the default port
This is, of course, optional and you can use any mongo DB you like.

Rename `.env.example` to `.env` and configure it to use localhost and the default username/password (or your credentials for your own server)

Initialize the DB with default data using `npm run initDB`

Run the server using `npm run dev`

## Helper Scripts

`npm run resetDB` will drop all collections and reinitialize the DB
`node util/addModel.js {modelName}` will create an empty model, add it to the index.js of all of the models, and create empty routes for GET/POST/PUT/DELETE
`node util/removeModel.js {modelName}` will remove the model, remove it from index.js, and remove associated routes

If you create a model and wish to populate initial data, add a JSON with an array of the data you wish to add to `util/initialData` and when you initialize the database it will pull that data.