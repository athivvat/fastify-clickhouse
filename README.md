# fastify-clickhouse

Fastify ClickHouse connection plugin

## Install

```sh
npm i fastify-clickhouse --save
# or
yarn add fastify-clickhouse
```

## Usage

Add it to your project with `register` and you are done!

```javascript
const fastify = require('fastify')()

fasttify.register(require('fastify-clickhouse'), {
    url: 'http://localhost',
    port: 8123,
    debug: false,
    basicAuth: null,
    isUseGzip: false,
    format: "json", // "json" || "csv" || "tsv"
    config: {
        session_id                              : 'session_id if neeed',
        session_timeout                         : 60,
        output_format_json_quote_64bit_integers : 0,
        enable_http_compression                 : 0,
        database                                : 'my_database_name',
    },
});

fastify.get('/user/:id', function (req, reply) {
  const clickhouse = fastify.clickhouse()

  await clickhouse.query().exect()
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${address}`)
})

```

## Acknowledgements

This project is kindly sponsored by:

- [King Power Click](https://github.com/kingpowerclick)

## License

Licensed under [MIT](https://github.com/athivvat/fastify-clickhouse/blob/master/LICENSE).
