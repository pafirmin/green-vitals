# Green Vitals

Green Vitals is a web-app that allows UK-based users to retrieve information about their region's energy sources
and air quality. I created this app primarily as an exercise in CSS animation and the HTML5 canvas element.
The app takes a UK postcode as input, validated against the official UK government postcode RegEx, and uses this
to retrieve detailed location data from the postcode.io API. The relavent location data is then used to make requests to 
the National Grid's carbon intensity API and Open Weather Map's air pollution service. The response data
is then rendered into suitable charts using the HTML5 canvas element. The app offers a clean, user-friendly interface
and a fully reponsive design.

# Live Demo

https://pafirmin.github.io/green-vitals/
