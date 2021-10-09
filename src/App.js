import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
  Viro3DObject,
  ViroAmbientLight,
} from '@viro-community/react-viro';
const HelloWorldSceneAR = () => {
  const [text, setText] = useState('Abs sht AR...');

  function onInitialized(state, reason) {
    console.log('guncelleme', state, reason);
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('Hellfsgdgssdf!');
    } else if (state === ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
  function _onClick(source) {
    console.log("We just Clicked the image!");
  }
    
  function _onClickState(state, source) {
    if(stateValue == 1) {
        console.log("User has click-down on the image!");
    } else if(stateValue == 2) {
        console.log("User has click-up on the image!");
    } else if(stateValue == 3) { 
        console.log("User has finally clicked on the image!");
    }
  }
    
  function _onDrag(draggedToPosition, source) {
    console.log("Dragged to: x" + draggedToPosition[0] + " y:" + draggedToPosition[1] + " z: " + draggedToPosition[2]); 
  }
    
  function _onHoverDoSomething(isHovering, source) {
    if(isHovering) {
      console.log("We are hovering onto the image!");
    }else{
      console.log("We are not longer hovering on the image!");
    }   
  }
  
  function _onScroll(scrollPosition, source) {
         console.log("Scrolled to: x" + scrollPosition[0] + " y:" + scrollPosition[1]); 
  }
  
  function _onSwipe(swipeState, source) {
    if(swipeState == 1) {
        console.log("Swiped up");
    } else if(swipeState == 2) {
        console.log("Swiped down");
    } else if(swipeState == 3) { 
       console.log("Swiped left");
    } else if(swipeState == 4) { 
       console.log("Swiped right");
    }
  }
  
  function _onTouch(state, touchPos, source)  {
   var touchX = touchPos[0];
   var touchY = touchPos[1];
    if(state == 1) {
        // Touch Down
    } else if(state == 2) {
        // Touch Down Move
    } else if(state == 3) { 
        // Touch Up
    }
  }
  
  function _onFuse(source){
   // User has hovered over object for timeToFuse milliseconds
  }

  return (
    // <ARDrivingCarScene />
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      />
      <ViroAmbientLight color="#FFFFFF" />
      <ViroBox
        position={[0, -0.5, -1]}
        animation={{ name: 'rotate', run: true, loop: true }}
        scale={[0.3, 0.3, 0.1]}
        materials={["grid"]}
        onClick={_onClick}
        onClickState={_onClickState}
        onDrag={_onDrag}
        onHover={_onHoverDoSomething}
        onScroll={_onScroll}
        onSwipe={_onSwipe}
        onTouch={_onTouch}
        onFuse={{ callback: _onFuse, timeToFuse: 3000 }}

      />
      <Viro3DObject
        position={[0, -0.5, -1]}
        animation={{ name: 'rotate', run: true, loop: true, onStart: () => console.log('started object animations'), onFinish: () => console.log('started object animations') }}
        source={require('./res/car_body.vrx')}
        scale={[0.3, 0.3, 0.1]}
        type="VRX"
        materials={["grid"]}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

ViroAnimations.registerAnimations({
  rotate: {
    properties: {
      rotateY: '+=90',
    },
    duration: 250, //.25 seconds
  },
});
ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/bumblebee_Base_Color.png'),
    lightingModel: "Lambert",
    bloomThreshold: 0.5,
  },
})
var styles = StyleSheet.create({
  f1: { flex: 1 },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
