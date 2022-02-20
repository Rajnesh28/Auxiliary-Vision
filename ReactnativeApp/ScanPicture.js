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

  const uploadImage = async () => {
    // asks to access photos and takes upload from user
    // impliment react native image picker
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
      </View>
    <View style={styles.fixedRatio}>
      {image && <Image source={{uri: image}} style={{flex:1}} />}
    </View>
    <View style={styles.fixedRatio}>
        <Pressable style={styles.button} onPress={() => {takePicture()}}>
         <Text style={styles.text}>{"Desrcibe Image"}</Text>
        </Pressable>
    </View>
    <View style={styles.fixedRatio}>
        <Pressable style={styles.button2} onPress={() => {takePicture()}}>
         <Text style={styles.text}>{"Read Text"}</Text>
        </Pressable>
    </View>
    <View style={styles.fixedRatio}>
        <Pressable style={styles.button3 } onPress={() => {uploadImage()}}>
         <Text style={styles.text}>{"Scan PDF"}</Text>
        </Pressable>
    </View>

    <View style={styles.fixedRatio}>
        <Pressable style={styles.button4 } onPress={() => setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front:Camera.Constants.Type.back)}>
         <Text style={styles.text}>{"Flip Camera"}</Text>
        </Pressable>
    </View>
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
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fixedRatio: {
    flex:1,
    aspectRatio:1,
    position: 'relative'

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 32,
    borderRadius: 3,
    elevation: 0,
    position: 'absolute',
    backgroundColor: 'lavender',
    textAlign: 'center',
    bottom: -180
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 32,
    borderRadius: 3,
    elevation: 0,
    position: 'absolute',
    backgroundColor: 'lemonchiffon',
    textAlign: 'center',
    bottom: -120
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 32,
    borderRadius: 3,
    elevation: 0,
    position: 'absolute',
    backgroundColor: 'lightpink',
    textAlign: 'center',
    bottom: -60
  },
  button4: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 32,
    borderRadius: 3,
    elevation: 0,
    position: 'absolute',
    backgroundColor: 'lightcyan',
    textAlign: 'center',
    bottom: 0
  },
  text: {
    fontSize: 39,
    lineHeight: 70,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: 'black',
    textAlign: 'center',
    marginTop: 0,
    width: 330
  },
});