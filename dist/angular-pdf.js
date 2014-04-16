(function () {

  'use strict';

  angular.module('pdf', []).directive('pdfJs', function($window) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var url = scope.$eval(attrs.pdfUrl),
          pdfDoc = null,
          pageIndex = 1,
          scale = 1,
          canvas = element[0],
          ctx = canvas.getContext('2d');

        scope[attrs.pdfJs] = {};
        var obj = scope[attrs.pdfJs];

        PDFJS.disableWorker = true;
        obj.pageIndex = pageIndex;

        obj.renderPage = function(num) {

          pdfDoc.getPage(num).then(function(page) {
            var viewport = page.getViewport(scale);
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            var renderContext = {
              canvasContext: ctx,
              viewport: viewport
            };

            page.render(renderContext);

          });

          obj.pageCount = pdfDoc.numPages;
        };

        obj.previous = function() {
          if (obj.pageIndex <= 1)
            return;
          obj.pageIndex = parseInt(obj.pageIndex, 10) - 1;
          obj.refresh();
        };

        obj.next = function() {
          if (obj.pageIndex >= pdfDoc.numPages)
            return;
          obj.pageIndex = parseInt(obj.pageIndex, 10) + 1;
          obj.refresh();
        };

        obj.zoomIn = function() {
          scale += 0.2;
          obj.renderPage(obj.pageIndex);
          return scale;
        };

        obj.zoomOut = function() {
          scale -= 0.2;
          obj.renderPage(obj.pageIndex);
          return scale;
        };

        obj.refresh = function() {
          if(obj.pageIndex > pdfDoc.numPages) {
              obj.pageIndex = pdfDoc.numPages;
          }
          if(obj.pageIndex < 1) {
              obj.pageIndex = 1;
          }
          obj.renderPage(obj.pageIndex);
        };

        PDFJS.getDocument(url).then(function (_pdfDoc) {
          obj.pageCount = _pdfDoc.numPages;
          pdfDoc = _pdfDoc;
          obj.renderPage(obj.pageIndex);
        });
      }
    };
  });

})();
