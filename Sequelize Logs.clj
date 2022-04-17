╭─ N:\PROJECTs\basarbk\tdd-nodejs  16.13.1  16m 54.43s  ✔  11:39:32 ─╮
╰─ npm test                                                                                                                                                   ─╯

> express-tdd@1.0.0 test
> jest --watch
  console.log
    Executing (default): CREATE TABLE IF NOT EXISTS `users`
      (`id` INTEGER PRIMARY KEY AUTOINCREMENT, `username` VARCHAR(255), `email` VARCHAR(255), `password` VARCHAR(255),
       `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL);

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): PRAGMA INDEX_LIST(`users`)

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): DELETE FROM `users`

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): INSERT INTO `users` (`id`,`username`,`email`,`password`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4,$5);

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): DELETE FROM `users`

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): INSERT INTO `users` (`id`,`username`,`email`,`password`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4,$5);

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): DELETE FROM `users`

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): INSERT INTO `users` (`id`,`username`,`email`,`password`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4,$5);

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): SELECT `id`, `username`, `email`, `password`, `createdAt`, `updatedAt` FROM `users` AS `user`;

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): DELETE FROM `users`

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): INSERT INTO `users` (`id`,`username`,`email`,`password`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4,$5);

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): SELECT `id`, `username`, `email`, `password`, `createdAt`, `updatedAt` FROM `users` AS `user`;

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): DELETE FROM `users`

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): INSERT INTO `users` (`id`,`username`,`email`,`password`,`createdAt`,`updatedAt`) VALUES (NULL,$1,$2,$3,$4,$5);

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)

  console.log
    Executing (default): SELECT `id`, `username`, `email`, `password`, `createdAt`, `updatedAt` FROM `users` AS `user`;

      at Sequelize.log (node_modules/sequelize/src/sequelize.js:1200:15)



 PASS  __test__/UserRegister.spec.ts
  User Registration
    √ returns 200 OK when signup request i valid (177 ms)
    √ returns success message when signup request is valid (122 ms)
    √ saves the user to database (127 ms)
    √ saves the username and email to database (128 ms)
    √ hashes the password in database (121 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        5.075 s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
