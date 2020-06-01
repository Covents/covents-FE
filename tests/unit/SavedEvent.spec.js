import { shallowMount } from "@vue/test-utils";
import SavedEvent from "../../src/components/SavedEvent.vue";

let wrapper;

describe("SavedEvent", () => {
  beforeEach(() => {
    wrapper = shallowMount(SavedEvent, {
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
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render the saved event from the favorites array", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render the text for the event name and date", () => {
    expect(wrapper.text()).toBe("ZAYN MALIK PARTY Sun, May 31, 2020");
  });

  it("should render with a link to the external event page", () => {
    const link = wrapper.find(".event-link");
    expect(link.exists()).toBe(true);
  });
});
