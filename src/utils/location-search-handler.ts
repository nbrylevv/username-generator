export const getData = function() {
  const { search } = window.location;

  return search
    ? search.slice(1, window.location.search.length).split('&')
    : null;
};

export const saveData = function(data: string[][]) {
  const stringifyData = data.map((_: string[]) => _.join('=')).join('&');

  window.history.replaceState(null, window.document.title, `${window.location.pathname}?${stringifyData}`);
};

export const resetData = function () {
  window.location.search = '';
};
