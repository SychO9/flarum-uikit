# Flarum UiKit
[![latest version](https://img.shields.io/packagist/v/sycho/flarum-uikit.svg?style=flat-square)](https://packagist.org/packages/sycho/flarum-uikit)
![flarum version](https://img.shields.io/badge/flarum-%5E0.1.0--beta.14-%23e7742e?style=flat-square)
![mit license](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square&color=green)
![downloads](https://img.shields.io/packagist/dt/sycho/flarum-uikit?color=%23f28d1a&style=flat-square)
[![donate](https://img.shields.io/badge/donate-buy%20me%20a%20coffee-%23ffde39?style=flat-square)](https://www.buymeacoffee.com/sycho)

[Flarum](https://flarum.org) UiKit with reusable frontend utilities for extension developers. (***Not An Extension***)

## Usage
Use the package's extender to register its resources.

**extend.php**
```php
return [
    new SychO\UiKit\Extend\Register,
];
```

Add it to your webpack config `webpack.config.js`
```js
module.exports = require('flarum-webpack-config')({
  useExtensions: ['sycho-uikit']
});
```

**example.js**
```jsx
import { uikit } from '@sycho-uikit';

const {
  ProgressBar,
  Label,
  LabelGroup,
  Input,
  TagSelector
} = uikit;

/**
 * @param mini bool           small sized
 * @param alternate bool      works with backgrounds using control-bg background color
 * @param progress number     percentage
 * @param className string
 */
<ProgressBar fancy={true} mini={false} alternate={false} progress={93} />

/**
 * @param color string
 */
<Label color="red">Text</Label>

/**
 * Container for a group of labels
 */
<LabelGroup></LabelGroup>

/**
 * @param icon string         fontawesome icon
 * @param className string
 * ...attrs:    other attributes
 */
<Input icon="fas fa-user" className="Input--example"/>

/**
 * @param selectedTags Tag[]    List of already selected tags
 * @param excludedTags Tag[]    List of unlisted tags
 * @param onchange function
 */
<TagSelector selectedTags={tags} excludedTags={excludedTags} onchange={(tags) => this.tags = tags} />
```

## Installation
```ssh
$ composer require sycho/flarum-uikit
```

## Updating
```ssh
$ composer update sycho/flarum-uikit
```

## Links
* [GitHub](https://github.com/SychO9/flarum-uikit)
* [Packagist](https://packagist.org/packages/sycho/flarum-uikit)

## License
The MIT License.
