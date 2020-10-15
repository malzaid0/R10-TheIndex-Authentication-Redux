#### Introduction

We've redeployed TheIndex API. Now you can't create authors or books without being logged in.

#### Setup

1. Fork the [repository](https://github.com/JoinCODED/R10-TheIndex-Authentication-Redux)
2. Clone it.
3. `cd` into the project directory.
4. Install the required packages for the task.

    ```shell
    $ yarn install
    ```

5. Run the project

    ```shell
    $ yarn start
    ```
---

#### Task

#### 1. Explore

Take some time to explore the starting code. You should find an actions file and a reducer for authentication. You should also find new forms for login and signup.

#### 2. Posting Books and Authors

Right now the book and author posting actions will always fail. That's because we have to be logged in with a valid token to use them. Implement login and signup to get them to work again.

1. Complete the reducer in `reducers/user.js`.
2. Complete the `login` and `signup` actions in `actions/authentication.js`.  
Don't forget to set the `Authentication` header for `axios`.  
The endpoints in the backend are:
      * `POST` to https://the-index-api.herokuapp.com/login/
      * `POST` to https://the-index-api.herokuapp.com/signup/
3. Connect these actions to the login and signup forms.
4. Create an account and log in. The posting forms should now work again.

#### 3. Logout

1. If the user is logged in, the login and signup buttons in the `Sidebar` should be replaced with a logout button that includes the `username`.
2. This button should log the user out (surprise!)

#### 4. UX Features

1. The "add author" card should only be visible for logged in users.
2. The "add new book" button should only be visible for logged in users.
3. Only users who are **not** logged in should be able to go to `/login` and `/signup`. Users who are already logged in should be redirected to the home page.
4. Login should be persistent. If I log in and then refresh the page, I should still be logged in!

---

#### Submission

1. Push your code.