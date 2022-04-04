import React, { useState, useEffect} from 'react';
import { Text, View, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import styles from '../styles/style';

function CameraPage({route}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [faces, setFaces] = useState([]);
  const product = route.params;


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

   const handleFacesDetected = ({ faces }) => {
     setFaces(faces);
  }; 

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={Camera.Constants.Type.front}
          onFacesDetected={handleFacesDetected}
          faceDetectorSettings={{
            mode: FaceDetector.FaceDetectorMode.fast,
            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
            runClassifications: FaceDetector.FaceDetectorClassifications.none,
            minDetectionInterval: 10,
            tracking: true,
          }}>
      </Camera>
      
      {faces.map(({ bounds,rollAngle, leftEarPosition, rightEarPosition }, i) => {
          return (
            
            <View
              key={i}
              style={{
                position: "absolute",
                width: bounds.size.width,
                height: bounds.size.height,
                left: bounds.origin.x,
                top: bounds.origin.y,
                zIndex: 9,
                overflow:"visible",
                //Rotates the hat with the head
                transform: [{rotate: rollAngle +"deg"}]
              }}
            >
              <View style={{overflow:"visible"}}>
                    {/*Image height controls where the bottom of the hat sits */}
                    <Image source={{uri:product.url}} style={{ width:bounds.size.x,
                height:'25%', overflow:"visible", left: leftEarPosition, right: rightEarPosition}} ></Image>
              </View>
            </View>
            
          );
        })}
    </View>
  );
}
export default CameraPage;
