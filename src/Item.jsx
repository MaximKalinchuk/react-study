import React from 'react';

const Item = (props) => {
    const { handleUpdate, handleRemove, handleComeBack, tasks, page } = props

    const activeTasks = [];
    const finishedTasks = [];

    tasks.forEach((task) => {
      if (task.state === "active") {
        activeTasks.push(task)
      }
      if (task.state === "finished") {
        finishedTasks.push(task)
      }
    })

    if (page === 'primary') {
      return (
        <>
        {activeTasks.length !== 0 && <div className="alert alert-primary" role="alert" style={{width: "75%"}}>Активные задачи:</div>}
        {activeTasks.length === 0 && <div className="alert alert-primary" role="alert" style={{width: "75%"}}>У вас пока нет активных задач</div>}
          {activeTasks.map(( {id, text} ) => {
          return (   
            <div key={id}>
              <div className="row" style={{width: "77%"}}>
                <div className="col-auto">
                  <button type="button" onClick={handleUpdate(id)} className="btn btn-outline-success btn-sm">✓</button>
                </div>
                <div className="col">{text}</div>
              </div>
              <hr style={{width: "75%"}} />
            </div>
          )
        })}
        </>
      )
    }

    if (page === 'success') {
      return (
        <>
        {finishedTasks.length !== 0 && <div className="alert alert-success" role="alert" style={{width: "75%"}}>Выполненные задачи:</div>}
        {finishedTasks.length === 0 && <div className="alert alert-success" role="alert" style={{width: "75%"}}>У вас нет выполненных задач</div>}
        {finishedTasks.map(( {id, text} ) => {
          return (   
            <div key={id}>
              <div className="row" style={{width: "77%"}}>
                <div className="col-auto">
                  <button type="button" onClick={handleRemove(id)} className="btn btn-outline-danger btn-sm">✗</button>
                </div>
                <div className="col">{text}</div>
                <div className="col-auto">
                <button type="button" onClick={handleComeBack(id)} className="btn btn-outline-primary btn-sm" style={{marginLeft: '2px'}}>Вернуть</button></div>
              </div>
              <hr style={{width: "75%"}} />
            </div>
          )
        })}
        </>
      )
    }
}

export default Item;