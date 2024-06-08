import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialColors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#A833FF', '#FF8C33', '#33FFD1', '#FFD133'];

const Color = () => {
  const [colors, setColors] = useState(initialColors);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const newColors = Array.from(colors);
    const [movedColor] = newColors.splice(result.source.index, 1);
    newColors.splice(result.destination.index, 0, movedColor);

    setColors(newColors);
  };

  const handleColorChange = (index, newColor) => {
    const newColors = colors.map((color, i) => (i === index ? newColor : color));
    setColors(newColors);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="colors">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef} style={{ display: 'flex', gap: '10px' }}>
            {colors.map((color, index) => (
              <Draggable key={color} draggableId={color} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    style={{ ...provided.draggableProps.style, backgroundColor: color, width: '50px', height: '50px', border: '1px solid black', cursor: 'pointer' }}
                  >
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => handleColorChange(index, e.target.value)}
                      style={{ width: '50px', height: '50px', opacity: 0, cursor: 'pointer' }}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Color;

