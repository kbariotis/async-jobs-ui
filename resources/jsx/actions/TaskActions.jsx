import AppDispatcher from '../dispatcher/AppDispatcher';

const TaskActions = {

  /**
   * @param  {string} text
   */
  create: (text) => {
    AppDispatcher.dispatch({
      actionType: 'TASK_CREATE',
      text: text
    });
  },

  /**
   * @param  {string} id The ID of the ToDo item
   * @param  {string} text
   */
  updateCompletion: (id, percent) => {
    AppDispatcher.dispatch({
      actionType: 'TASK_UPDATE_COMPLETION',
      id: id,
      text: percent
    });
  }

};

export default TaskActions;
