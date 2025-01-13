import React, {useState} from 'react';

import {Tooltip, Grow} from "@mui/material";

import {watchlist} from "../data/data";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BarChartIcon from '@mui/icons-material/BarChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function WatchList() {
    return (
        <>
            <div className="watchlist-container">
                <div className="search-container">
                    <input
                        style={{fontSize: ".80rem"}}
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                        className="search"
                    />
                    <span className="counts">  {watchlist.length} / 50</span>
                </div>

                <ul className="list">
                    {watchlist.map((stock, index) => {
                        return (
                            <WatchListItem stock={stock} key={index}/>
                        )
                    })}
                </ul>
            </div>
        </>
    );
}

export default WatchList;



const WatchListItem = ({stock}) => {
    const [showWatchListActions, setShowWatchListActions] = useState(false);

    const handleMouseHover = (e)=>{
        setShowWatchListActions(true);
    }
    const handleMouseExit = (e)=>{
        setShowWatchListActions(false);
    }


    return(
        <li onMouseEnter={handleMouseHover} onMouseLeave={handleMouseExit}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="item-info">
                    <span className='percent'>{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDownIcon className='down'/>
                    ) : (<KeyboardArrowUpIcon className='up'/>)}
                    <span className='price'>{stock.price.toFixed(2)}</span>
                </div>
            </div>
            {showWatchListActions && <WatchListActions uid={stock.name} />}
        </li>
    )
}

const WatchListActions = ({uid}) => {
    return (
        <span className='actions'>
            <span className='' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '.25rem' }}>
                <Tooltip title="Buy (B)" placement='top' arrow>
                    <button className='buy'>Buy</button>
                </Tooltip>
                <Tooltip title="Sell (S)" placement='top' arrow>
                    <button className='sell'>Sell</button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement='top' arrow>
                    <button className="action">
                        <BarChartIcon className='icon' />
                    </button>
                </Tooltip>
                <Tooltip title="More" placement='top' arrow>
                    <button className="action">
                        <MoreHorizIcon className='icon' />
                    </button>
                </Tooltip>
            </span>
        </span>
    )
}