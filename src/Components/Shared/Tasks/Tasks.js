import React from 'react';

// Shared
import Button from '../Button/Button';

const Tasks = (props) => {
    return (
        <div className='col-12 col-md-4'>
            <div className='tasks shadow-c'>
                <div className='tasks-head'>
                    <img src={props.img} alt='done' className='tasks__icon' />
                    <div className='tasks-content'>
                        <p className='tasks__name'>{props.nameTasks}</p>
                        <h3 className='tasks__score'>{props.scoreTasks}</h3>
                    </div>
                </div>
                <Button text={props.seeTasks} />
            </div>
        </div>
    );
};

export default Tasks;