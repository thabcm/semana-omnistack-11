import React, { useState } from "react";
import "./styles.css";
import { TwitterPicker } from "react-color";


export default function ColorPicker() {
  const [color, setColor] = useState("#ff0000");
  const [showColorPicker, setShowColorPicker] = useState(false)


  return (
    <div>


        <button onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>
        {showColorPicker ? 'Escolher uma cor' : 'Escolher uma cor'}
        </button>

        {showColorPicker && (
            <TwitterPicker
        color={color}
        onChangeComplete={color => {setColor(color.hex);
        }}
      />
          )}
      <div
        style={{
          backgroundColor: color,
        }}
      />
    </div>
    
  );
}