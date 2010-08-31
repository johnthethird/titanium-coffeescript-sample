(function() {
  var Win2;
  Win2 = function() {
    var label;
    this.win = Titanium.UI.createWindow({
      title: 'Window2',
      backgroundColor: '#fff'
    });
    label = Titanium.UI.createLabel({
      color: '#999',
      text: 'I am Window 2',
      font: {
        fontSize: 20,
        fontFamily: 'Helvetica Neue'
      },
      textAlign: 'center',
      width: 'auto'
    });
    this.win.add(label);
    return this;
  };
  root.Win2 = Win2;
})();
