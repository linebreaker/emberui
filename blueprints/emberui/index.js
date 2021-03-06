module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'twix'}

    ]).then(function() {
      return this.addAddonToProject('ember-cli-moment-shim');

    }.bind(this)).then(function() {
      return this.addAddonToProject('ember-cli-sass');

    }.bind(this)).then(function() {
      return this.addAddonToProject('ember-cli-velocity');

    }.bind(this));
  }
};
