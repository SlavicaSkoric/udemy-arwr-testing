import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

//we setup our test suite here before any actual tests start to run
//jest first starts this file and then any other test files in our project

Enzyme.configure({ adapter: new Adapter() });

//now we can use enzyme in any of our test files in our project
