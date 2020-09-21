![MoovazLogo_RGB](https://user-images.githubusercontent.com/42229194/92333200-fe9e0a00-f0ad-11ea-810e-c2c99a31f738.png)

# Moovaz Employement (Test)

Design and develop simple web based system which allows users to enter company and employee information, edit and delete them as necessary.

## Entity details

Company entity:
--Companies
  -Name
  -Description

Employee entity:
--Employees
  -Name
  -DOB
  -Email
  -PhoneNumber
  -Address
  -Salary

## System support functions

-User login/logout
-Company listing
-Creating company (Only manager)
-Editing company (Only manager)
-Deleting company (Only manager)
-Employee listing
-New employee creation (Only manager)
-Editing existing employee (Only manager)
-Deleting existing employee (Only manager)
-Access restriction base on user level (Manager or staff)

## Role and functions

--User access
 -Manager (Able to see, edit, delete as they wish)
 -Staff (Only see records of same level, cannot edit or delete)

## Technologies requirements

NodeJS 

PostgreSQL

Responsive UI framework (Reponsive UI will scale base on screen resolution to fit into mobile screens)

Proper data listings with search filters, sorting and pagination

## Accessable

IE 10+, Chrome, Firefox, Safari

Native browsers on - iOS 8+, Android 4.x, Windows Phone 8+

## Starting the app

First install all dependencies

```
yarn install
```

Make sure you have all env variables set up (read previous paragraph).

Then create postgres database and run migrations for PostgreSQL:

```
yarn run sequelize db:create
yarn run sequelize db:migrate
```

In the end you can launch the app

```
yarn start
```

## Sample user

```
email:admin@example.com
password:12345678
```

## Demo

![moovaz demo](https://user-images.githubusercontent.com/42229194/92333777-49218580-f0b2-11ea-904a-a0f5b511eae1.gif)

## Additional screenshots



## License

Application is [MIT licensed](./LICENSE).

## Contribute

Special thanks to Adminbro for the front styling.
