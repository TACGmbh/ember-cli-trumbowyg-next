import Ember from 'ember';

const {
  Component,
  on,
  get,
  getProperties,
  set
} = Ember;

export default Component.extend({
  tagName: 'textarea',

  html: null,

  placeholder: null,

  disabled: false,

  change: null,

  optionNames: [
    'prefix',
    'lang',
    'btns',
    'semantic',
    'resetCss',
    'removeformatPasted',
    'autogrow'
  ],

  _updateDisabled () {
    this.$().trumbowyg(get(this, 'disabled') ? 'disable' : 'enable');
  },

  _renderTrumbowyg: on('didInsertElement', function () {
    const options = get(this, 'optionNames')
      .filter(optionName => get(this, optionName) !== undefined)
      .reduce((options, optionName) => {
        options[optionName] = get(this, optionName);
        return options;
      }, {});
    const $this = this.$();

    $this.attr('placeholder', get(this, 'placeholder'));
    $this.trumbowyg(options);
    $this.trumbowyg('html', get(this, 'html'));
    this._updateDisabled();

    this.$().on('tbwchange', () => {
      if (get(this, 'change')) {
        get(this, 'change')(this.$().trumbowyg('html'));
      }
    });
  }),

  _destroyTrumbowyg () {
    const $this = this.$();

    $this.off('tbwchange');
    $this.trumbowyg('destroy');
  },

  _isAttrChanged (attrName) {
    return get(this, attrName) !== get(this, `_oldOptions.${attrName}`);
  },

  updateTrumbowyg: on('didUpdateAttrs', function () {
    const options = getProperties(this, get(this, 'optionNames').concat(['disabled', 'placeholder']));
    const optionsUpdated = get(this, 'optionNames').some(optionName => this._isAttrChanged(optionName));
    const htmlUpdated = get(this, 'html') !== this.$().trumbowyg('html');
    const disabledUpdated = this._isAttrChanged('disabled');
    const placeholderUpdated = this._isAttrChanged('placeholder');

    if (optionsUpdated || placeholderUpdated) {
      this._destroyTrumbowyg();
      this._renderTrumbowyg();
    }

    if (htmlUpdated) {
      this.$().trumbowyg('html', get(this, 'html'));
    }

    if (disabledUpdated) {
      this._updateDisabled();
    }

    set(this, '_oldOptions', options);
  }),

  teardownTrumbowyg: on('willDestroyElement', function () {
    this._destroyTrumbowyg();
  })
});
