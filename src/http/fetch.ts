import 'whatwg-fetch';

export function getJSON(url: string): Promise<any> {
  return fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log('parsed json', json);
    }).catch(function(ex) {
      console.warn('parsing failed', ex);
    });
};