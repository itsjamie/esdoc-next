# ESDoc Inject Style Plugin
## Install
```bash
npm install @itsjamie/esdoc-inject-style-plugin
```

## Config
```json
{
    "source": "./src",
    "destination": "./doc",
    "plugins": [
        {
            "name": "@itsjamie/esdoc-inject-style-plugin", 
            "option": {
                "enable": true, 
                "styles": ["./foo.css"]
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
