import { createSiteFiltersTemplate } from './view/site-filters.js';
import { createSiteMenuTemplate } from './view/site-menu.js';
import { createSiteSortTemplate } from './view/site-sort.js';
import { createRouteInfoTemplate } from './view/route-info.js';
import { createFromEditTemplate } from './view/form-edit.js';
import { createRoutePointTemplate } from './view/route-points.js';
import { createRouteListTemplate } from './view/route-list.js';

const header = document.querySelector('.page-header');
const menuPlace = header.querySelector('.trip-controls');
const filtersPlace = header.querySelector('.trip-controls__filters');
const infoPlace = header.querySelector('.trip-main');

const main = document.querySelector('.page-main');
const contentPlace = main.querySelector('.trip-events');

const ROUTE_COUNT = 3;

const render = (container, template, place='beforeend') => {
  container.insertAdjacentHTML(place, template);
};

render(menuPlace, createSiteMenuTemplate());
render(filtersPlace, createSiteFiltersTemplate());
render(infoPlace, createRouteInfoTemplate());
render(contentPlace, createSiteSortTemplate(), 'afterbegin');

render(contentPlace, createRouteListTemplate());
const pointsPlace = main.querySelector('.trip-events__list');

render(pointsPlace, createFromEditTemplate(), 'afterbegin');
for(let i = 0; i < ROUTE_COUNT; i++) {
  render(pointsPlace, createRoutePointTemplate());
}
