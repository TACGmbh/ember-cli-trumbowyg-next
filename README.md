# ember-cli-trumbowyg-next

Ember Addon for [Trumbowyg](https://alex-d.github.io/Trumbowyg/) WYSIWYG editor.

# Getting Started

## Installation

In your ember-cli project, install this addon from npm 

```
ember install ember-cli-trumbowyg-next --save-dev
```

## Usage

```handlebars
  {{trumbowyg-editor
    html=html
    btns=btns
    lang=lang
    disabled=disabled
    placeholder=placeholder
    semantic=semantic
    autogrow=autogrow
    resetCss=resetCss
    removeformatPasted=removeformatPasted
    change=(action (mut html))
  }}
```

## Options 
See [Trumbowyg docs](https://alex-d.github.io/Trumbowyg/documentation.html)

## Importing specific languages and plugins
By default, all available trumbowyg languages and plugins will be imported into the project. You can optionally specify exactly which languages and plugins should be imported to the project via the 'langs' and 'plugins' options, which accepts an array of names.

```javascript
  /* your ember-cli-build.js */

  ...

  let app = new EmberAddon(defaults, {
    "ember-cli-trubowyg-next": {
      // array of language names
      langs: ['ru', 'fr'],
      // array of plugin names
      plugins: ['colors']
    }
  });

  ...

```
