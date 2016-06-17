import { Circle } from 'rc-progress'

const Graph = (props) => {
  let percentComplete = props.tasks.list.length > 0 ? props.tasks.complete/props.tasks.count*100 : 0
  let percentTodo = props.tasks.list.length > 0 ? props.tasks.todo/props.tasks.count*100 : 0
  let percentInProgress = props.tasks.list.length > 0 ? props.tasks.inProgress/props.tasks.count*100 : 0
  return (
    <div className='container list-container'>
      <div className='col-md-4 div-border'>
        <div className='center-container'>
          <p className='center-text-horizontal graphOne graphNumber' > {props.tasks.complete} </p>
          <p className='center-text-horizontal graphText' > Complete </p>
        </div>
        <p className='center-text'>{Math.floor(percentComplete)}%</p>
        <div className='col-md-6 col-centered'>
          <Circle percent={ percentComplete } strokeWidth='10' strokeColor='#3EC556' />
        </div>
      </div>
      <div className='col-md-4 div-border'>
        <div className='center-container'>
          <p className='center-text-horizontal graphTwo graphNumber' > {props.tasks.inProgress} </p>
          <p className='center-text-horizontal graphText' > In Progress </p>
        </div>
        <p className='center-text'>{Math.floor(percentInProgress)}%</p>
        <div className='col-md-6 col-centered'>
          <Circle percent={ percentInProgress } strokeWidth='10' strokeColor='#3E74C5' />
        </div>
      </div>
      <div className='col-md-4 div-border'>
        <div className='center-container'>
          <p className='center-text-horizontal graphThree graphNumber' > {props.tasks.todo} </p>
          <p className='center-text-horizontal graphText' > Todo </p>
        </div>
        <p className='center-text'>{Math.floor(percentTodo)}%</p>
        <div className='col-md-6 col-centered'>
          <Circle percent={ percentTodo } strokeWidth='10' strokeColor='#C53E3E' />
        </div>
      </div>
    </div>
  );
}

export default Graph;