# angular-pdf [![Build Status](https://travis-ci.org/sayanee/angularjs-pdf.png)](https://travis-ci.org/sayanee/angularjs-pdf) [![Dependency Status](https://gemnasium.com/sayanee/angularjs-pdf.png)](https://gemnasium.com/sayanee/angularjs-pdf)


>An [AngularJS](http://angularjs.org/) [directive](http://docs.angularjs.org/guide/directive) `ng-pdf` to display PDF files with [PDFJS](http://mozilla.github.io/pdf.js/).

## Overview [[demo](http://sayan.ee/angularjs-pdf/)]

Integrate PDF files right into web pages.

![Angular PDF](ng-pdf.gif)

###Features

1. next / previous page
1. zoom in / out
1. jump to a page number
1. define the path to pdf attribute

##Requirements

1. [AngularJS](http://angularjs.org/) - get the latest [angular.min.js](https://developers.google.com/speed/libraries/devguide#angularjs)
1. [PDFJS](http://mozilla.github.io/pdf.js/) - build the files [`pdf.js` and `pdf.worker.js`](https://github.com/mozilla/pdf.js#building-pdfjs)

## Getting Started

1. install or copy over the file `dist/angular-pdf.min.js` or `dist/angular-pdf.js`

1. include the path to the direcitve file in `index.html`

    ```
    <script src="js/vendor/angular-pdf/dist/angular-pdf.js"></script>
    ```

1. include the directive as a dependency when defining the angular app:

    ```
    var app = angular.module('App', ['pdf']);
    ```
1. include the directive with the attribute path to the partial under a controller

    ```
    <div class="wrapper" ng-controller="DocCtrl">
        <canvas pdf-js="pdfViewer" pdf-url="/url/to/file.pdf"></canvas>
    </div>
    ```

###Options

1. **Next / Previous page**: Include the controls in the view file as defined in the attribute `template-url`

    ```
    <button ng-click="pdfViewer.previous()"><</span></button>
    <button ng-click="pdfViewer.next()">></span></button>
    ```
1. **Zoom in / out**: Include the controls in the view file as defined in the attribute `template-url`

    ```
    <button ng-click="pdfViewer.zoomIn()">+</span></button>
    <button ng-click="pdfViewer.zoomOut()">-</span></button>
    ```

1. **Jump to page number**: Include the controls in the view file as defined in the attribute `template-url`

    ```
    <span>Page: </span><input type="text" min=1 ng-model="pdfViewer.pageNum"><span> / {{pageCount}}</span>
    ```

##Similar projects

1. [ng-pdfviewer](https://github.com/akrennmair/ng-pdfviewer)


##Credit

PDF example used is [Relativity: The Special and General Theory by Albert Einstein](http://www.gutenberg.org/ebooks/30155) as kindly organized and made available free by [Project Gutenberg](http://www.gutenberg.org/wiki/Main_Page).


## License

(C) Sayanee Basu 2014, released under an MIT license
