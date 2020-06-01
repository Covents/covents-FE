import { shallowMount } from "@vue/test-utils";
import YourEvents from "../../src/components/YourEvents.vue";

let wrapper;

describe("YourEvents", () => {
  beforeEach(() => {
    wrapper = shallowMount(YourEvents, {
      propsData: {
        eventObj: {
          id: "1",
          name: "Zayn Malik Party",
          image:
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
          date: "Sun, May 31, 2020",
          link:
            "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
        },
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
        favorites: [],
      },
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render the YourEvents component on page load", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render with a header and a message saying you have no saved events if the favorites array is empty", () => {
    expect(wrapper.text()).toBe("YOUR EVENTS: You have no saved events!");
  });

  it("should render the Your Events div", () => {
    expect(wrapper.classes()).toContain("your-events");
  });

  it("should remove the message saying you have no saved events if the favorites array is not empty", () => {
    wrapper = shallowMount(YourEvents, {
      propsData: {
        eventObj: {
          id: "1",
          name: "Zayn Malik Party",
          image:
            "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
          date: "Sun, May 31, 2020",
          link:
            "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
        },
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
      },
    });
    expect(wrapper.text()).toBe("YOUR EVENTS:");
  });
});
