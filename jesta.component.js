'use strict';
let service;
if (typeof module !== 'undefined') {
  service = require('./jesta.service');
}

const jestaTemplate = `
<div class="jumbotron">
    <h1 class="display-4">Hello, world!</h1>
    <p class="lead">This is a simple jesta display. Click to show a jesta!</p>
    <hr class="my-4">
    <p class="jesta-display"></p>
    <button class="btn btn-primary btn-lg get-jesta-btn">Get Jesta</button>
</div>
`;

function initComponent(componentRoot, contains) {
  componentRoot.innerHTML = jestaTemplate;

  componentRoot.querySelector('.get-jesta-btn').onclick = function () {
    let txt;

    if(contains) {
      txt = (service) ? service.getJestaContains(contains) : getJestaContains(contains);
    } else {
      txt = (service) ? service.getRandomJesta() : getRandomJesta();
    }

    componentRoot.querySelector('.jesta-display').innerHTML = txt;
    return txt;
  }
}

if (typeof module !== 'undefined') {
  module.exports.jestaTemplate = jestaTemplate;
  module.exports.initComponent = initComponent;
}
