import { shallowMount } from "@vue/test-utils";
import EventsContainer from "../../src/components/EventsContainer.vue";

let wrapper;

describe("EventsContainer", () => {
  beforeEach(() => {
    wrapper = shallowMount(EventsContainer, {
      propsData: {
        favorites: [
          {
            id: "1",
            name: "Zayn Malik Party",
            image:
              "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
            date: "Sun, May 31, 2020",
            link:
              "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
          },
        ],
        events: [
          {
            id: "1",
            name: "Zayn Malik Party",
            image:
              "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
            date: "Sun, May 31, 2020",
            link:
              "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
          },
        ],
        results: [],
        keyword: "Zayn",
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render the event card on page load", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render the events container div", () => {
    expect(wrapper.classes()).toContain("events-container");
  });
});
