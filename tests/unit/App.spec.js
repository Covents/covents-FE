import { shallowMount } from "@vue/test-utils";
import App from "../../src/App.vue";

let wrapper;
let vm;

describe("App", () => {
  beforeEach(() => {
    wrapper = shallowMount(App, {
      propsData: {
        events: [
          {
            id: 1,
            name: "Zayn Malik Party",
            image:
              "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F100189414%2F444571810080%2F1%2Foriginal.20200505-023120?w=500&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C125%2C500%2C250&s=b8e2f287f2ff81f05f5686af7315a584",
            date: "Sun, May 31, 2020",
            link:
              "https://www.eventbrite.co.uk/e/zayn-malik-party-tickets-104380292264?aff=ebdssbonlinesearch",
          },
          {
            date: "Sat, May 30, 2020",
            id: 2,
            image:
              "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F102156798%2F254100041942%2F1%2Foriginal.20200529-092630?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C67%2C640%2C320&s=9fff0716018dc2cf7a109d422dfa653b",
            link:
              "https://www.eventbrite.co.uk/e/big-smoke-radio-nite-11-beatles-special-tickets-107188206812?aff=ebdssbonlinesearch",
            name: "Big Smoke Radio Nite 11 - Beatles Special",
            time: "6:00 PM BST",
          },
        ],
        favorites: [],
        results: [],
        selectedEvent: "",
        keyword: "",
        selectedDate: "",
      },
    });
    vm = wrapper.vm;
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render the App on page load", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should be able to render app div", () => {
    const app = wrapper.find("#app");

    expect(app.exists()).toBe(true);
  });
});
