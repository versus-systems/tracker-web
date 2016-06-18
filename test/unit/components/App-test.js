import {assert} from '../../support/chai';
import {mount,shallow} from 'enzyme';
import App from 'containers/App';
import Task from 'components/Task.js';

describe('App', function() {
  it('should be true', function() {
    assert(true === true, 'Pigs are flying');
  });

  describe('Task', function() {
    it('should render', function () {
      const taskProps = {
        startTask: function(){},
        projectId: 'test',
        id: 'test',
        name: 'Task Number One',
        state: 'to-do'
      }      
      const item = shallow(<Task 
        startTask={taskProps.startTask}
        projectId={taskProps.projectId}
        id={taskProps.id}
        name={taskProps.name}
        state={taskProps.state}/>);

      assert(item.props.state = 'to-do', 'todo class not found');    
    });
  });
});
