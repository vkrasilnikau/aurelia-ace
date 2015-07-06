import 'gooy/aurelia-animator-velocity';
import 'gooy/aurelia-markdown';

import 'nprogress';

import 'bootstrap-less/js/collapse';
import 'bootstrap-less/js/transition';

import {SmoothScroll} from 'gooy/aurelia-smooth-scroll';

//Fix Prism to allow dot character in html attribute names
Prism.languages.markup.tag.pattern = /<\/?[\w:-]+\s*(?:\s+[^=]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i;

export function configure(aurelia) {

  SmoothScroll.getOffset = function(){
    return - 20 - document.querySelector(".page-host").offsetTop;
  };

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('gooy/aurelia-animator-velocity')
    .plugin('gooy/aurelia-smooth-scroll')
    .plugin('gooy/aurelia-markdown')
    .plugin('gooy/aurelia-ace')
  ;

  aurelia.globalizeResources("loading-indicator");

  aurelia.start().then(a => a.setRoot());
}
