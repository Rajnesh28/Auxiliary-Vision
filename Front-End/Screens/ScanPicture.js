import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, Pressable  } from 'react-native';
import { Camera } from 'expo-camera';

export function ScanPicture(){
  const [hasCameraPermission, setHasCameraPermission] = useState(null); 
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () =>{
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if(camera){
      const data=await camera.takePictureAsync(null);
      setImage(data.uri);
    }
  }

  if (hasCameraPermission === false){
    return <Text>No Camera Access</Text>;
  }


  return (
    <View style={{flex:1}}>
      <View style={styles.cameraContainer}>
        <Camera ref={ref => setCamera(ref)}
          style={styles.fixedRatio}
          type={type}
          ratio={'1:1'}
          />

      <Button title="Take Picture"
       onPress={() => {takePicture()}}
       />
         
      </View>

       <Button title="Take Picture"
       onPress={() => {takePicture()}}
       />

       <Button title="Scan Text"></Button>
 
    </View>
  );
}
// {image && <Image source={{uri: image}} style={{flex:1}} />}
/*
Add to return to add flip camera button
<Pressable style={styles.button} onPress={() => setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front:Camera.Constants.Type.back)}>
   <Text style={styles.text}>{"Flip Camera"}</Text>
</Pressable>
*/

const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    flexDirection:'row',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fixedRatio: {
    flex:1,
    aspectRatio:1
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    position: 'absolute',
    backgroundColor: 'rgba(0,128,128,0.4)',
  },
  text: {
    fontSize: 50,
    lineHeight: 150,
    fontWeight: 'normal',
    letterSpacing: 0.25,
    color: 'darkslategrey'
  },
});