(function() {
  var tab1, tab2, tabGroup;
  tabGroup = Titanium.UI.createTabGroup({
    barColor: '#336699'
  });
  Titanium.UI.setBackgroundColor('#000');
  root.Win1 = new root.GenericWindow('Win1', 'I am Window 1');
  tab1 = Titanium.UI.createTab({
    icon: 'KS_nav_views.png',
    title: 'Win1',
    window: root.Win1.win
  });
  tabGroup.addTab(tab1);
  root.Win2 = new root.GenericWindow('Win2', 'I am Window 2');
  tab2 = Titanium.UI.createTab({
    icon: 'KS_nav_views.png',
    title: 'Win2',
    window: root.Win2.win
  });
  tabGroup.addTab(tab2);
  tabGroup.open({
    transition: Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
  });
})();
