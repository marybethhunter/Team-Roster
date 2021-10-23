# Team Roster App! [![Netlify Status](https://api.netlify.com/api/v1/badges/2dc2b074-98a6-420a-90d9-7becceca6b08/deploy-status)](https://app.netlify.com/sites/mbh-team-roster/deploys)

<img width="929" alt="2021-10-22 (1)" src="https://user-images.githubusercontent.com/86667443/138535975-1dc16563-d814-46e8-841e-3fa852cb376d.png">

## [View Site](https://mbh-team-roster.netlify.app/)
## Get Started:

```javascript
 $ git clone git@github.com:marybethhunter/Team-Roster.git
 $ cd Team-Roster
```

## About the User
* This app was created for a user who needs a way to keep up with all of their favorite New Orleans Saints players. 


## Features: 
#### **CRUD**: 
* The user can create, read, update, and delete all players. 
* The same form is used to create and update players.
#### **Authentication**: 
* All users will have to log in to the app with Google. Users will only be able to CRUD on their own players.

### [Loom video walkthrough](https://www.loom.com/share/a8b1c2f36b6041a1a3a1be70e8343e02)

## Relevant Links:
* [Flow Chart](https://docs.google.com/presentation/d/1Bd_PH2XEeh6fUnBtABcfzfGlzP6y4eiIbFxtjlboDOc/edit?usp=sharing)
* [ERD](https://dbdiagram.io/d/616e1ca86239e146477691a2)

## Technology Used:
* React
* Reactstrap
* Javascript
* Styled Components
* Firebase
* Axios
* Netlify
* Postman

## Code Snippets:

```javascript
    useEffect(() => {
      let isMounted = true;
      if (player.firebaseKey) {
        if (isMounted) {
          setFormInput({
            name: player.name,
            firebaseKey: player.firebaseKey,
            imageURL: player.imageURL,
            position: player.position,
            uid: player.uid,
          });
        }
      }
      return () => {
        isMounted = false;
      };
    }, [player]);
```

## Screenshots:

![Team view](https://user-images.githubusercontent.com/86667443/138561909-1fb579c7-95a7-40d7-9ca6-40ed61881f23.png)
<img width="942" alt="newplayerform" src="https://user-images.githubusercontent.com/86667443/138536002-5fd2edd0-11ec-4c60-b3b7-be012b615976.png">

### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
