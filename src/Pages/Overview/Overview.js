import React, { useState } from 'react';

// Components
import Tasks from '../../Components/Shared/Tasks/Tasks';

// Shared
import Button from '../../Components/Shared/Button/Button';

// Img
import taskDone from '../../Assets/Images/icon/iconly-glass-tick.svg'
import taskIssues from '../../Assets/Images/icon/iconly-glass-info.svg'
import taskTickets from '../../Assets/Images/icon/iconly-glass-paper.svg'

// MUI
import Avatar from '@mui/material/Avatar';

// Database
import { inboxData } from '../../Database/database';

const Overview = () => {
    const [allTasks] = useState([
        { id: 1, img: taskDone, nameTasks: 'Done Tasks', scoreTasks: 31, seeTasks: 'See all tasks' },
        { id: 2, img: taskIssues, nameTasks: 'Pending Issues', scoreTasks: 12, seeTasks: 'See all issues' },
        { id: 3, img: taskTickets, nameTasks: 'Open tickets', scoreTasks: 5, seeTasks: 'See all tickets' }
    ])

    return (
        <div className='overview'>
            <div className='container'>
                <h3 className='components-name'>Overview</h3>
                <div className='overview-tasks'>
                    <div className='row'>
                        {allTasks.map(item => <Tasks key={item.id} {...item} />)}
                    </div>
                </div>
                <div className='overview-charts'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='overview-recharts'></div>
                        </div>
                        <div className='col-5'>
                            <div className='shadow-c'>
                                <div className='overview-inbox'>
                                    <h3 className='components-title'>Inbox</h3>
                                    {inboxData.map(user => (
                                        <div className='overview-inbox-users' key={user.id}>
                                            <Avatar src={user.profile} alt='profile' className='overview__inbox-img' />
                                            <div className='overview-inbox-userinfo'>
                                                <h4 className='overview__inbox-name'>{user.userName}</h4>
                                                <p className='overview__inbox-desc'>{user.massege}</p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                                <Button text='Go to chat' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;