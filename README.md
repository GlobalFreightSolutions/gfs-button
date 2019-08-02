## GFS Button
Buttons have 3 attributes you can use: text, outlined and raised. Read below how you can use them and what does each one.


### Install

```bash
$ npm i --save gfs-button
```

### Import In a HTML file:

```html
<html>
    <head>
        <script type="module">
            import '@gfsdeliver/gfs-button/gfs-button.js';
        </script>
    </head>
    <body>
        <h3>Text buttons</h3>
            <gfs-button text class="default">Default</gfs-button>
            <gfs-button text class="primary">Primary</gfs-button>
            <gfs-button text class="secondary">Secondary</gfs-button>
            <gfs-button text disabled>Disabled</gfs-button>

        <h3>Outlined buttons</h3>
            <gfs-button outlined class="default outlined">Default</gfs-button>
            <gfs-button outlined class="primary outlined">Primary</gfs-button>
            <gfs-button outlined class="secondary outlined">Secondary</gfs-button>
            <gfs-button outlined disabled class="disabled outlined">Disabled</gfs-button>

        <h3>Contained buttons</h3>
            <gfs-button raised class="default">Default</gfs-button>
            <gfs-button raised class="primary">Primary</gfs-button>
            <gfs-button raised class="secondary">Secondary</gfs-button>
            <gfs-button raised disabled>Disabled</gfs-button>
    </body>
</html>
```

### In a Polymer 3 element
```js
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@gfsdeliver/gfs-button/gfs-button.js';

class CustomElement extends PolymerElement {
    static get template() {
        return html`
            <h3>Text buttons</h3>
                <gfs-button text class="default">Default</gfs-button>
                <gfs-button text class="primary">Primary</gfs-button>
                <gfs-button text class="secondary">Secondary</gfs-button>
                <gfs-button text disabled>Disabled</gfs-button>

            <h3>Outlined buttons</h3>
                <gfs-button outlined class="default outlined">Default</gfs-button>
                <gfs-button outlined class="primary outlined">Primary</gfs-button>
                <gfs-button outlined class="secondary outlined">Secondary</gfs-button>
                <gfs-button outlined disabled class="disabled outlined">Disabled</gfs-button>

            <h3>Contained buttons</h3>
                <gfs-button raised class="default">Default</gfs-button>
                <gfs-button raised class="primary">Primary</gfs-button>
                <gfs-button raised class="secondary">Secondary</gfs-button>
                <gfs-button raised disabled>Disabled</gfs-button>
        `;
    }
}
customElements.define('custom-element', CustomElement);
```


## Attribute
Property | Description
---------|-------------
text | text button only
outlined | button with a border and no background color filled
raised | adds a shadow to the button, not suitable for text buttons

## Styling

Custom property | Description | Default
----------------|-------------|----------
--gfs-button-color | button font color | `--white-color`;
--gfs-button-bg | button background color | `--gfs-main-color`;
--gfs-button-font-size | button font size | `14px`
--gfs-button-font-family | button font family | `"Segoe UI", 'Helvetica Neue'`
--gfs-button-font-weight | button font weight | `normal`
--gfs-button-text-transform | button text transform | `normal`
--gfs-button-border-radius | border radius of the button | `3px`
--gfs-iron-icon-width | width of the icon | `18px`;
--gfs-iron-icon-height | height of the icon | `18px`;
--gfs-iron-icon-fill | fill color of the svg icon | `currentcolor`;
--gfs-iron-icon-stroke | stroke color of the svg icon |  none;
--gfs-button-text-transform |  | `normal`
--gfs-text-default-hover-background | text button only default background on hover | `rgba(149, 145, 145, .23)`
--gfs-text-primary-hover-background | text button only primary background on hover | `rgba(214, 0, 0, .10)`
--gfs-text-secondary-hover-background | text button only secondary background on hover | `rgba(51, 117, 224, .25)`
--gfs-text-disabled-hover-background | text button only disabled background on hover | `rgba(168, 168, 168, .3)`
--gfs-outline-default-border | outline style border style for default button | `1px solid rgba(149, 145, 145, 1)`
--gfs-outline-primary-border | outline style border style for primary button | `1px solid rgba(214, 0, 0, 1)`
--gfs-outline-secondary-border | outline style border style for secondary button | `1px solid rgba(51, 117, 224, 1)`
--gfs-outline-disabled-border | outline style border style for disabled button | `1px solid rgba(168, 168, 168, 1)`
--gfs-outline-default-hover-background | outline background color on over for default button | `rgba(149, 145, 145, .23)`
--gfs-outline-primary-hover-background | outline background color on over for primary button | `rgba(214, 0, 0, .10)`
--gfs-outline-secondary-hover-background | outline background color on over for secondary button | `rgba(51, 117, 224, .25)`
--gfs-outline-disabled-hover-background | outline background color on over for disabled button | `rgba(168, 168, 168, .3)`
--default-button | mixin styles for default button |
--primary-button | mixin styles for primary button |
--secondary-button | mixin styles for secondary button |


## License

[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)