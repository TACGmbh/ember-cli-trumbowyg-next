/* eslint-env node */
module.exports = {
  afterInstall () {
    return this.addPackageToProject('trumbowyg', '2.8.1');
  }
};
