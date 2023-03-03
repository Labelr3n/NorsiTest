import React, { useState } from "react";

const Checkbox = ({dragList, setDragList}) => {
    const [currentDrag, setCurrentDrag] = useState(null)
  
    function dragStartHandler(e, drag) {
      setCurrentDrag(drag)
    }
  
    function dragEndHandler (e) {
    
    }
  
    function dragOverHandler (e) {
      e.preventDefault()
    }
  
    function dropHandler (e, drag) {
      e.preventDefault()
      setDragList(dragList.map(c => {
        if(c.id === drag.id) {
          return {...c, order: currentDrag.order}
        }
        if(c.id === currentDrag.id) {
          return {...c, order: drag.order}
        }
        return c
      }))
    }
    
    const sortCards = (a,b) => {
      if (a.order > b.order) {
        return 1
      } else {
        return -1
      }
    }

    return(
        <div>
        {dragList.sort(sortCards).map(drag => 
        <label className='labelCheckbox'
        onDragStart={(e) => dragStartHandler(e, drag)}
        onDragLeave={(e) => dragEndHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dropHandler(e, drag)}
        draggable={true}
        key={drag.id}
        >
          <input
        className={'drag'}
        type='checkbox'
        />
        {drag.text}
        </label>
        )}
      </div>
    )
}

export default Checkbox;