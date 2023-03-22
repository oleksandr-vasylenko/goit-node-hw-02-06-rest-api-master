## Contacts API

### Description:

Given API allows you to work with the contacts available in the database.
Every contact added to the database gets a unique avatar.
There is an option to change the avatar for the contact.
Your can register a new user and after this you will get the email with the email verification

### The following methods for work with contacts are available:

- **getAll** - returns you all contacts from database
- **getById** - returns you a particular contact by passed ID
- **addNew** - adds a new contact
- **deletebyId** - removes a contact by passed ID
- **updateById** - returns updated fields by passed ID
- **updateFavorite** - adds the contact to favorite

### The following authorization methods are available:

- **register**
- **verifyEmail**
- **resendVerifyEmail**
- **login**
- **getCurrent**
- **logout**
- **updateAvatar**

### Commands available in Terminal:

- `npm start` &mdash; start server in production mode
- `npm run start:dev` &mdash; start server in development mode
- `npm run lint` &mdash; run code check from eslint. it is necessary to perform before each PR and adjust all eslint errors
- `npm lint:fix` &mdash; the same eslint check, but with automated adjustments of simple errors
