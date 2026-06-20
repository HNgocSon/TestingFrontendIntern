window.App = window.App || {};

App.$ = function $(selector, scope = document) {
  return scope.querySelector(selector);
};

App.$$ = function $$(selector, scope = document) {
  return Array.from(scope.querySelectorAll(selector));
};

App.money = function money(value) {
  return `$${Number(value).toFixed(2)}`;
};

App.getPage = function getPage() {
  return document.body.dataset.page;
};
