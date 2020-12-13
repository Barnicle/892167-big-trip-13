import {FiltersTemplate} from "./view/filters";
import {SortTemplate} from "./view/sort";
import {TripInfoTemplate} from "./view/tripInfo";
import {ContentTemplate} from "./view/list";
import {generateTripPointData} from "./mock/tripPoint";
import {CreateFormTemplate} from "./view/createForm";
import Utils from 'utils';

const testData = generateTripPointData(3);

const render = (element, template, position) => {
  element.insertAdjacentHTML(position, template);
};
//  selectors
const tripControlsElement = document.querySelector(`.trip-controls`);
const siteMainElement = document.querySelector(`.trip-main`);
const tripEventsContainer = document.querySelector(`.trip-events`);
const sort = new SortTemplate();
const filters = new FiltersTemplate();
const content = new ContentTemplate(testData);
 const createForm = new CreateFormTemplate(testData);
const tripInfo = new TripInfoTemplate(testData);
//  render templates


render(tripEventsContainer, createForm.getTemplate(), `afterbegin`);
render(tripControlsElement, filters.getTemplate(), `afterbegin`);
render(siteMainElement, tripInfo.getTemplate(), `afterbegin`);
render(tripEventsContainer, sort.getTemplate(), `beforeend`);
render(tripEventsContainer, content.getTemplate(), `beforeend`);
