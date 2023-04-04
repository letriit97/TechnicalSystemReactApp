import React from 'react';

const YoutobeItem = (props) => {
    return (
        <div className="youtobe-item">
            <div className="youtobe-image">
                <img src={props.image} alt={props.title}/> 
            </div>

            <div className="youtobe-footer">
                <img src={props.avatar} alt="" className="youtobe-avatar" />
                <div className="youtobe-info">
                    <h3 className="youtobe-title">
                        {props.title}
                    </h3>

                    <h4 className="youtobe-author">
                        {props.author}
                    </h4>
                </div>
            </div>
    </div>
    );
};

export default YoutobeItem;