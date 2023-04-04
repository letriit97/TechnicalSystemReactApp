import React from 'react';
import YoutobeItem from './Youtobe_Item';
import {YoutobeData} from '../../data'

const YoutobeList = () => {
    return (
        <div className="youtobe-list">
        {
          YoutobeData.map((item,index) => 
          {
            return (
                <YoutobeItem key={item.id}
                    image= {item.image }
                    avatar={item.avatar || item.image} // NẾU Avatar không có thì lấy Image
                    title={item.title || 'Tiêu đề không có thì lấy cái tiêu đề này'}
                    author={item.author}
              ></YoutobeItem>
            )
          })
        }
      </div>
    );
};

export default YoutobeList;