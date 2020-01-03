# ESDoc Accessor Plugin
## Install
```bash
npm install @itsjamie/esdoc-accessor-plugin
```

## Config
```json
{
  "source": "./src",
  "destination": "./doc",
  "plugins": [
    {
        "name": "@itsjamie/esdoc-accessor-plugin", 
        "option": {
            "access": ["public", "protected", "private"],
            "autoPrivate": true
        }
    }
  ]
}
```

- `access` is default `["public", "protected", "private"]`
- `autoPrivate` is default `true`

## LICENSE
MIT

## Author
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)
