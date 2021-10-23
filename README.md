# Sports Roster App! [![Netlify Status](https://api.netlify.com/api/v1/badges/2dc2b074-98a6-420a-90d9-7becceca6b08/deploy-status)](https://app.netlify.com/sites/mbh-team-roster/deploys)

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

### [Loom video walkthrough](https://www.loom.com/share/1ec491fdd74645e79246134ebc69f609)

## Relevant Links:
* [Flow Chart](https://docs.google.com/presentation/d/1rBTACDbwz0VCCZZGPJUCMzEwH91miYVK1eDuByUlTZQ/edit#slide=id.p)
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

<img width="929" alt="2021-10-22 (2)" src="https://user-images.githubusercontent.com/86667443/138535981-adf4fdac-f1c0-41a6-ac69-2b58f6d3e5a6.png">
<img width="942" alt="newplayerform" src="https://user-images.githubusercontent.com/86667443/138536002-5fd2edd0-11ec-4c60-b3b7-be012b615976.png">

### Contributors: [Mary Beth Hunter](https://github.com/marybethhunter)
