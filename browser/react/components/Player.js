import React from 'react';

const Player = (props) => {

  return (
    <footer>
      <div>
        <div className="pull-left">
          <button className="btn btn-default" onClick={props.prev}>
            <span className="glyphicon glyphicon-step-backward" />
          </button>
          <button className="btn btn-default" onClick={props.toggle}>
            <span className="glyphicon glyphicon-play" />
          </button>
          <button className="btn btn-default" onClick={props.next}>
            <span className="glyphicon glyphicon-step-forward" />
          </button>
        </div>
        <div className="bar">
          <div className="progress">
            <div className="progress-bar" style={{backgroundColor: 'cornflowerblue', width: `${100 * props.progress}%`}} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Player;
