import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.expect = global.expect;

Enzyme.configure({ adapter: new Adapter() });