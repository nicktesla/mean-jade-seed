# MEAN App with JADE


## Install instructions

Install `generator-angular-fullstack` (Generates a scaffold for a new angular app and makes it easy to add new routes/controllers)
```
npm install -g generator-angular-fullstack
```

Install `grunt`(grunt will be used to run the server, build packages, minify js, and all other "grunt" work)
```
npm install -g grunt-cli
```

Clone this repo and cd into it
```
git clone <REPO_URL> && cd mean-jade-seed
```

### Running the app
with live reload
`grunt server` 

### Heroku Deployment

1. Commit changes to main branch 

2. Run `grunt heroku`

3. switch to the heroku directory `cd heroku` and commit changes to the heroku repo:
```
git add .
```  
```
git commit -am  "<COMMIT_MESSAGE>"
```

4. `git push heroku master`

Type `heroku open` to view the app @ orangeroad.herokuapp.com 
