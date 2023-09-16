db.createUser({
    user: 'admin',
    pwd: 'admin', // Choose a secure password
    roles: [
      {
        role: 'userAdminAnyDatabase',
        db: 'admin',
      },
      'readWriteAnyDatabase',
    ],
});