# Asnyc/Await on Node/MySQL

> Trying how to promisify the node mysql package using the `util` standard library from node.

```js

// mysql config here ....
// const config = {};

const db = require('index.js')(config);

try {
  const query = 'SELECT * ...';
  const rows = await db.query(query);

  // do the things you want for rows.
  console.log(rows.length);
} catch(err) {
  // handle error
} finally {
  await db.close();
}
```

