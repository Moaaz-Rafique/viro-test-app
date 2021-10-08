import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroMaterials,
  ViroAnimations,
} from '@viro-community/react-viro';
import ARDrivingCarScene from './ARDrivingCarScene';

const HelloWorldSceneAR = () => {
  // const [text, setText] = useState('Abs sht AR...');

  // function onInitialized(state, reason) {
  //   console.log('guncelleme', state, reason);
  //   if (state === ViroConstants.TRACKING_NORMAL) {
  //     setText('Hellfsgdgssdf!');
  //   } else if (state === ViroConstants.TRACKING_NONE) {
  //     // Handle loss of tracking
  //   }
  // }

  return (
    <ARDrivingCarScene />
    // <ViroARScene onTrackingUpdated={onInitialized}>
    //   <ViroText
    //     text={text}
    //     scale={[0.5, 0.5, 0.5]}
    //     position={[0, 0, -1]}
    //     style={styles.helloWorldTextStyle}
    //   />
    //   <ViroBox
    //     position={[0, -0.5, -1]}
    //     animation={{name: 'rotate', run: true, loop: true}}
    //     scale={[0.3, 0.3, 0.1]}
    //   />
    // </ViroARScene>
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
var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
