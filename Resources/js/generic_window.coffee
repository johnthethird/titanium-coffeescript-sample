#generic_window.coffee
class GenericWindow
  constructor: (theTitle, theText) ->
    # Save off the context of this object to a local var 'self'
    self = this
    @custom1 = "Default Value"
    @win = Ti.UI.createWindow({title:theTitle,backgroundColor:'#fff'})
    label = Titanium.UI.createLabel({
      color: '#999',
      text: theText,
      font: {
        fontSize: 20,
        fontFamily: 'Helvetica Neue'
      },
      textAlign: 'center',
      width: 'auto'
    })
    @win.add(label);
    
    @win.addEventListener('click', () ->
      alert(self.custom1)
    )

root.GenericWindow = GenericWindow