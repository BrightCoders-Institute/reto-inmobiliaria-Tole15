const LikeButton = require('../components/LikeButton');

describe('LikeButton', () => {
  it('should toggle "liked" state when pressed', () => {
    const wrapper = shallow(<LikeButton />);
    const button = wrapper.findWhere(node => node.props.testID === 'like-button');

    button.props().onPress();

    expect(wrapper.state().liked).toBe(true);

    button.props().onPress();

    expect(wrapper.state().liked).toBe(false);
  });
});
