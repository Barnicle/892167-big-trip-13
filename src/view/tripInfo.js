export class TripInfoTemplate {
  constructor(data) {
    this.data = data;
    this.price = this.totalPrice();
  }
  totalPrice() {
    return this.data.reduce((total, value) => {
      return total + value.price;
    }, 0);
  }
  createTripInfoTemplate() {
    return `<section class="trip-main__trip-info  trip-info">
            <div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>

              <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;20</p>
            </div>
            <p class="trip-info__cost">
              Total: &euro;&nbsp;<span class="trip-info__cost-value">${this.price}</span>
            </p>
          </section>`;
}
  getTemplate() {
    return this.createTripInfoTemplate();
  }
}
