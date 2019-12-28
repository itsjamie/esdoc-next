# ESDoc Inject GTM Plugin

## Install

```bash
npm install @itsjamie/esdoc-inject-gtm-plugin
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
                "id": "GTM-XXXXX"
            }
        }
    ]
}
```

`enable` is default `true`.

## LICENSE

MIT

## Author

[9renpoto](https://github.com/9renpoto)
