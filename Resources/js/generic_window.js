(function() {
  var GenericWindow;
  GenericWindow = function(theTitle, theText) {
    var label, self;
    self = this;
    this.custom1 = "Default Value";
    this.win = Ti.UI.createWindow({
      title: theTitle,
      backgroundColor: '#fff'
    });
    label = Titanium.UI.createLabel({
      color: '#999',
      text: theText,
      font: {
        fontSize: 20,
        fontFamily: 'Helvetica Neue'
      },
      textAlign: 'center',
      width: 'auto'
    });
    this.win.add(label);
    this.win.addEventListener('click', function() {
      return alert(self.custom1);
    });
    return this;
  };
  root.GenericWindow = GenericWindow;
})();
