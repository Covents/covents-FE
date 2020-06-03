import { shallowMount } from "@vue/test-utils";
import Search from "../../src/components/Search.vue";

let wrapper;

describe("Search", () => {
  beforeEach(() => {
    wrapper = shallowMount(Search);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  it("should render the search form on page load", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("should render with a button", () => {
    const button = wrapper.find(".search-btn");
    expect(button.exists()).toBe(true);
  });

  it("should render with a text input field", () => {
    const input = wrapper.find(".search-input");
    expect(input.exists()).toBe(true);
  });

  it("should render with placeholder text in the input field", () => {
    const input = wrapper.find(".search-input");
    expect(input.html()).toBe(
      '<input type="text" placeholder="search events..." class="search-input">'
    );
  });
});
