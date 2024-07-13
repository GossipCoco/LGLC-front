import { mount } from '@vue/test-utils';
import Pagination from '../../components/Components/GenericComponent/Pagination.vue';

describe('Pagination.vue', () => {
  it('renders pagination buttons correctly', async () => {
    const wrapper = mount(Pagination, {
      props: {
        nav: {
          current: 0,
          pages: 5,
          step: 4,
        },
      },
    });

    expect(wrapper.findAll('button').length).toBeGreaterThan(0);
  });

  it('disables previous button on first page', () => {
    const wrapper = mount(Pagination, {
      props: {
        nav: {
          current: 0,
          pages: 5,
          step: 4,
        },
      },
    });

    const prevButton = wrapper.find('button[disabled]');
    expect(prevButton.exists()).toBe(true);
  });

  it('disables next button on last page', () => {
    const wrapper = mount(Pagination, {
      props: {
        nav: {
          current: 4,
          pages: 5,
          step: 4,
        },
      },
    });

    const nextButton = wrapper.find('button[disabled]');
    expect(nextButton.exists()).toBe(true);
  });
});