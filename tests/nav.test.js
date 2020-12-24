import { h } from 'preact';
import Nav from '../src/components/nav';
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from 'enzyme';

describe('Initial Test of the Nav', () => {
	test('Nav renders 3 links', () => {
		const context = shallow(<Nav />);
		expect(context.find('a').length).toBe(3);
	});
});
