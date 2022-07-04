import './style.css';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { time1 } from "../Redux/action";

function Nav() {

    
    const dispatch = useDispatch();
    const listTime = useSelector((state) => state.time)


    const handelDate = () => {
        const curTime = new Date();
        const saveDate = curTime.getDate() + "/" + curTime.getMonth() + "/" + curTime.getFullYear() + "   " + curTime.getHours() + ":" + curTime.getMinutes() + ":" + curTime.getSeconds()

        dispatch(time1(saveDate));

    }


    return (
        <div className="App">
            <div className="main-navbar">
                <div className="main-navbar-1">
                    <img src='https://cdn-icons-png.flaticon.com/512/5496/5496411.png' alt="" className='nav-image-icon-1-logo' />
                    <div>
                        <h4>Demo Custom App</h4>
                        <p>APP NAME</p>
                    </div>
                    <img src="https://imgs.search.brave.com/rksESuuiBjty678ln9r7s8TdCPxwp1BGZ3M6RP75aOk/rs:fit:334:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/dzRQaEY3RndUeVZx/Sy1qVzNlVlVBQUFB/QSZwaWQ9QXBp" className='nav-image-icon' alt='' />
                    <div>
                        <h4>Assessment</h4>
                        <p>STAGE</p>
                    </div>
                    <img src="https://imgs.search.brave.com/rksESuuiBjty678ln9r7s8TdCPxwp1BGZ3M6RP75aOk/rs:fit:334:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/dzRQaEY3RndUeVZx/Sy1qVzNlVlVBQUFB/QSZwaWQ9QXBp" className='nav-image-icon' alt='' />
                    <div>
                        <h4>Create PO</h4>
                        <p>Button</p>
                    </div>
                    <img src="https://imgs.search.brave.com/rksESuuiBjty678ln9r7s8TdCPxwp1BGZ3M6RP75aOk/rs:fit:334:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5s/dzRQaEY3RndUeVZx/Sy1qVzNlVlVBQUFB/QSZwaWQ9QXBp" className='nav-image-icon' alt='' />
                    <div>
                        <h4>Button Rules</h4>
                    </div>

                </div>
                <div className="main-navbar-2">
                    <div>
                        <p>App saved on {listTime}</p>
                    </div>
                    <div>
                        <button className='nav-btn-done' onClick={handelDate}>DONE</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Nav;

