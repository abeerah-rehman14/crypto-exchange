# Crypto Exchange

This project has been made by using react components such as redux toolkit, persist-redux , antD, router dom , json-server etc

## Available Scripts
json-server -p 3000 db.json

npm run start

### `Phase 1`

Signup page has been created using form.group. Fields are name, email, password, home address, cnic document as a pdf. 
On successful signup, new user is added to an array, email and password verification has been done.
If user enters 3 incorrect passwords for same user then he/she is blocked and can not login again. 
### useState and router dom is used here mainly. 

![block user](https://github.com/abeerah-rehman14/crypto-exchange/assets/134891256/bffe9350-5f8e-4a72-8a87-f0ac614a2c29)
![incorrect password](https://github.com/abeerah-rehman14/crypto-exchange/assets/134891256/21f7d4be-4e33-4f90-8d1b-65b612cebd04)
![signup](https://github.com/abeerah-rehman14/crypto-exchange/assets/134891256/f2bccd0e-89d2-4712-bc75-89b7aba849c1)

### `Phase 2`
Blogs tab has been added which allow user to perform CRUD operations on static blog data.
 ### antDesign is used majorily for the UI (table, modals, icons etc)
![blogs](https://github.com/abeerah-rehman14/crypto-exchange/assets/134891256/12aee3a2-f1c9-4904-af7f-71c9d2f86485)
![blogCrud](https://github.com/abeerah-rehman14/crypto-exchange/assets/134891256/8862549f-4018-4637-9a5b-b41003ec4650)

### `Phase 3`
Proper dashboard has been made which displays the live coin rate and user purchased coin. Also allow the user to transfer his coins to other available user. Coins are deducted from login user account and added to the receipient account. 
 ### redux toolkit, persit-redux is used to maintain the state of login user. Axios is used for api calling. Json-server is used to store data in db.json. Binance api has been used for live coin rates.

![dashboard](https://github.com/abeerah-rehman14/crypto-exchange/assets/134891256/0a616663-3534-4469-9088-36b0f2150bcf)
![transferCoin](https://github.com/abeerah-rehman14/crypto-exchange/assets/134891256/a70ebda9-b21d-4e20-9645-813d05997855)

### `Phase 4`
Routes are defined as protected now, code optimization techniques have been used and deployment process is completed.
 ### siblings components and react.memo is used to optimize code, protected routes are used for loggedin users

https://crypto-exchange-otg.netlify.app/

![netlify-dashboard](https://github.com/abeerah-rehman14/crypto-exchange/assets/134891256/b5c5958b-17b4-427c-ad4b-0bff6ddfe1d0)
