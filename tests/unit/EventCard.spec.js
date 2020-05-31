import { shallowMount } from "@vue/test-utils";
import EventCard from "../../src/components/EventCard.vue";

describe("EventCard", () => {
  it("renders the event card on page load", () => {
    const wrapper = shallowMount(EventCard, {
      propsData: { eventObj:  {
        id: "1",
        event_name: "Zayn Malik Party",
        image:
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
        event_date: "Sun, May 31, 2020",
        link:
          "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
      }, events: [ {
        id: "1",
        event_name: "Zayn Malik Party",
        image:
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
        event_date: "Sun, May 31, 2020",
        link:
          "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
      }], favorites: [ {
        id: "1",
        event_name: "Zayn Malik Party",
        image:
          "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
        event_date: "Sun, May 31, 2020",
        link:
          "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
      }]
    }});
    expect(wrapper.exists()).toBe(true);
  })
})