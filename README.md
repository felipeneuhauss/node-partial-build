### How it works

```typescript
/// #if process.env.NODE_ENV == 'production'
res.send('hello world prod ' + FOO);

/// #else

res.send('hello world demo' + FOO);
/// #endif
```

Run:

```shell
"build:prod": "NODE_ENV=production webpack --config webpack.config.js"
```
```shell
"build:demo": "NODE_ENV=demo webpack --config webpack.config.js"
```

The /dist folder now doesn't contain any code like `res.send('hello world demo' + FOO);`
