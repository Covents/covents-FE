import { shallowMount } from "@vue/test-utils";
import EventCard from "../../src/components/EventCard.vue";

let wrapper;

describe("EventCard", () => {

  beforeEach(() => {
    wrapper = shallowMount(EventCard, {
      propsData: { eventObj:  {
        id: "1",
        name: "Zayn Malik Party",
        image:
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
        date: "Sun, May 31, 2020",
        link:
          "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
      }, events: [ {
        id: "1",
        name: "Zayn Malik Party",
        image:
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
        date: "Sun, May 31, 2020",
        link:
          "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
      }], favorites: [ {
        id: "1",
        name: "Zayn Malik Party",
        image:
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
        date: "Sun, May 31, 2020",
        link:
          "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
      }]
    }});
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render the event card on page load', () => {
    expect(wrapper.exists()).toBe(true);    
  });

  it('should render the text for the event name, date, and event details button', () => {
    expect(wrapper.text()).toBe('May 31 ZAYN MALIK PARTY EVENT DETAILS')
  });

  it('should render the event card div', () => {
    expect(wrapper.classes()).toContain('event-card');
  });

  it('should render the heart button and heart image', () => {
    const button = wrapper.find('.heart-btn')
    const buttonImg = wrapper.find('.heart-image')

    expect(button.exists()).toBe(true)
    expect(buttonImg.exists()).toBe(true)
  });

  it('should render the event image', () => {
    const image = wrapper.find('.main-image')

    expect(image.exists()).toBe(true)
  });

  it('should render the event date', () => {
    const date = wrapper.find('.event-date')

    expect(date.exists()).toBe(true)
  });

  it('should render the event details button', () => {
    const detailsBtn = wrapper.find('.event-details-btn')

    expect(detailsBtn.exists()).toBe(true)
  })
});