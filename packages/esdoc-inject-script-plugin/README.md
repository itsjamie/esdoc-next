# ESDoc Inject Script Plugin
## Install
```bash
npm install @itsjamie/esdoc-inject-script-plugin
```

## Config
```json
{
    "source": "./src",
    "destination": "./doc",
    "plugins": [
        {
            "name": "@itsjamie/esdoc-inject-script-plugin", 
            "option": {
                "enable": true, 
                "scripts": ["./foo.js"]
            }
        }
    ]
}
```

`enable` is default `true`.

## LICENSE
MIT

## Author
[Ryo Maruyama@h13i32maru](https://github.com/h13i32maru)
