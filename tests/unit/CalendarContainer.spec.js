import { shallowMount } from "@vue/test-utils";
import CalendarContainer from "../../src/components/CalendarContainer.vue";



let wrapper;

describe("CalendarContainer", () => {

  beforeEach(() => {
    wrapper = shallowMount(CalendarContainer);
  })

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render the calendar on page load', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('should render the container div on page load', () => {
    expect(wrapper.classes()).toContain('calendar-container')
  });

});