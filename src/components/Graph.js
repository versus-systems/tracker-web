import { Circle } from 'rc-progress'

const Graph = (props) => {
  let count = props.tasks.count
  let length = props.tasks.list.length
  let countComplete = props.tasks.complete
  let countTodo = props.tasks.todo
  let countInProgress = props.tasks.inProgress

  let percentComplete = length > 0 ? countComplete/count*100 : 0
  let percentTodo = length > 0 ? countTodo/count*100 : 0
  let percentInProgress = length > 0 ? countInProgress/count*100 : 0
  return (
    <div className='container bordered-container'>
      <div className='col-md-4 graph-border'>
        <div className='text-center'>
          <p className='center-text-horizontal graphOne graphNumber' > {countComplete} </p>
          <p className='center-text-horizontal graphText' > Complete </p>
        </div>
        <p className='percent'>{Math.floor(percentComplete)}%</p>
        <div className='col-md-6 col-centered'>
          <Circle percent={ percentComplete } strokeWidth='10' strokeColor='#3EC556' />
        </div>
      </div>
      <div className='col-md-4 graph-border'>
        <div className='text-center'>
          <p className='center-text-horizontal graphTwo graphNumber' > {countInProgress} </p>
          <p className='center-text-horizontal graphText' > In Progress </p>
        </div>
        <p className='percent'>{Math.floor(percentInProgress)}%</p>
        <div className='col-md-6 col-centered'>
          <Circle percent={ percentInProgress } strokeWidth='10' strokeColor='#3E74C5' />
        </div>
      </div>
      <div className='col-md-4 graph-border'>
        <div className='text-center'>
          <p className='center-text-horizontal graphThree graphNumber' > {countTodo} </p>
          <p className='center-text-horizontal graphText' > Todo </p>
        </div>
        <p className='percent'>{Math.floor(percentTodo)}%</p>
        <div className='col-md-6 col-centered'>
          <Circle percent={ percentTodo } strokeWidth='10' strokeColor='#C53E3E' />
        </div>
      </div>
    </div>
  );
}

export default Graph;