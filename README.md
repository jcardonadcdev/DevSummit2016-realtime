# DevSummit2016-realtime
Sample stream layer applications shown at the 2016 Esri Developer Summit

## Description
This is a set of applications that demonstrate different use cases for using the Esri JavaScript API's Stream Layer.

The samples:
* *simplewebsocket.html* - Shows connecting to a Stream Service subscribe endpoint without a Stream Layer. The application is useful for diagnosing problems with connecting to a Stream Service.
* *streamlayer.html* - Simple map and stream layer.
* *temporal-renderers.html* - A Stream Layer with a temporal renderer. The temporal renderer is used to symbolize moving observations and their tracks.
* *filtering.html* - Demonstrates how to set a spatial and/or attribute filter on a Stream Service from the Stream Layer
* *gauges.html* - Demonstrates the `relatedFeatures` capability of the Stream Layer to show stream gauges with changing attributes. The stream gauge features come from a map service, and the stream service messages contain attributes only.
* *streamlayer3d.html* - A Stream Layer rendered in 3D in a Scene View. Uses the 4.0 JavaScript API.

## View samples
The samples can be viewed [here] (https://jcardonadcdev.github.io/DevSummit2016-realtime/). The sample applications in the main branch do not use the styling that the live demos use. The samples in the main branch are meant to show example code, not to look pretty.

## Links
* [3.x Stream Layer Documentation] (https://developers.arcgis.com/javascript/jsapi/streamlayer-amd.html)
* [4.x Stream Layer Documentation] (https://developers.arcgis.com/javascript/beta/api-reference/esri-layers-StreamLayer.html). **Beta**
* Sample Stream Services with simulated data
  * [Server maintained by GeoEvent team] (https://geoeventsample3.esri.com:6443/arcgis/rest/)
  * [Server maintained by me] (https://idt-gepsample.dc.esri.com:6443/arcgis/rest/services)

