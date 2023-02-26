## Contacts API

Given API allows you to work with the contacts available in the database.

The following methods are available:

- **getAll** - returns you all contacts from database
- **getById** - returns you a particular contact by passed ID
- **addNew** - adds a new contact
- **deletebyId** - removes a contact by passed ID
- **updateById** - returns updated fields by passed ID
- **updateFavorite** - adds the contact to favorite

### Commands available in Terminal:

- `npm start` &mdash; start server in production mode
- `npm run start:dev` &mdash; start server in development mode
- `npm run lint` &mdash; run code check from eslint. it is necessary to perform before each PR and adjust all eslint errors
- `npm lint:fix` &mdash; the same eslint check, but with automated adjustments of simple errors
