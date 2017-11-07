# ember-cli-trumbowyg-next

Ember Addon for [Trumbowyg](https://alex-d.github.io/Trumbowyg/) WYSIWYG editor.

The codebase for this addon was taken from [ember-cli-trumbowyg](https://github.com/ipavelpetrov/ember-cli-trumbowyg). As we saw that there was no activity for more
than a year, we decided to create `ember-cli-trumbowyg-next` which uses the latest `trumbowyg` release available today and is compatible with the latest Ember LTS Version
to be (`2.16.2`).

The usage of this addon has not diverged from the original `ember-cli-trumbowyg` addon and is therefore ready to use as a in-place replacement for those of you who want
to upgrade from older versions.

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

  const app = new EmberAddon(defaults, {
    "ember-cli-trubowyg-next": {
      // array of language names
      langs: ['ru', 'fr'],
      // array of plugin names
      plugins: ['colors']
    }
  });

  ...

```
