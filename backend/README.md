Bu repe projenin backend kısmıdır. Node js (express) ile oluşturulmuştur. 

- Install dependencies: `npm install`

- Start the server: `npm start` 

- Port : `localhost:3000`

## Endpoints

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /users/ | `GET` | Empty | List all users. |
| /users/ | `POST` | {'firstName':'firstName', 'lastName':'lastName', 'password':'password', 'email':'email' } | Create a new user. |
| /users/:user_id | `PUT` | {'firstName':'firstName', 'lastName':'lastName', 'password':'password', 'email':'email' } | Update user. |
| /users/:user_id | `DELETE` | Empty | Delete user. |
| /users/user_id | `GET` | Empty | Get a user. |
| /users/top10 | `GET` | Empty | Get Top10  user list. |

