/**
 * Created by jcardonadcdev on 3/11/2016.
 */

require([
    "dojo/ready",
    "dojo/dom",
    "dojo/on"

], function(ready, dom, on) {

  ready(function () {
    doInit();
  });

  function doInit() {
    on(dom.byId('demoLinkList'), 'click', handleLinkListClick);
  }

  function handleLinkListClick(e) {
    var link = e.target.id;
    if (link) {
      switch (link) {
        case 'simplewebsocketTab':
          window.open("simplewebsocket.html", "_blank");
          break;
        case 'streamlayerTab':
          window.open("./streamlayer.html", "_blank");
          break;
        case 'filteringTab':
          window.open("filtering.html", "_blank");
          break;
        case 'messageTab':
          window.open("message-event.html", "_blank");
          break;
        case 'gaugesTab':
          window.open("gauges.html", "_blank");
          break;
        case 'chartsTab':
          window.open("streamlayer-charts.html", "_blank");
          break;
        case '3dTab':
          window.open("streamlayer3d.html", "_blank");
          break;
      }
    }
  }
});
