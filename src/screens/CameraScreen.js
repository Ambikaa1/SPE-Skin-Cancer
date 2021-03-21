// import React, {useEffect, useState, useRef, Component} from "react";
// import {View, Text, StyleSheet, TouchableOpacity, Alert, SafeAreaView, Image,
// AppRegistry, PanResponder, Animated} from "react-native";
// import { Camera } from "expo-camera";
// import {AntDesign, MaterialCommunityIcons, MaterialIcons, Feather, FontAwesome, SimpleLineIcons} from "@expo/vector-icons";
// import Dialog from "react-native-dialog";


// const CameraScreen = () => {

//     const [hasPermission, setHasPermission] = useState(null);
//     const [photoTaken, setPhotoTaken] = useState(false);
//     const [image, setImage] = useState(null);
//     const [drawing, setDrawing] = useState(false);

//     const handleImageTaken = (newUri) => {
//         setImage(newUri);
//         setPhotoTaken(true);
//     }

//     const handlePictureDeleted = () => {
//         setPhotoTaken(false);
//     }

//     const handlePictureAccepted = () => {
//         setDrawing(true);
//     }


//     //Request the users permission to access their camera
//     useEffect(() => {
//         (async () => {
//             const { status } = await Camera.requestPermissionsAsync();
//             setHasPermission(status === 'granted');
//         })();
//     }, []);

//     if (hasPermission === null) {
//         return <View />;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }

//     return (
//       <View style={styles.container}>
//           {/*Top bar includes the back button and the help button.*/}
//           <ViewTopBar
//               photoTaken = {photoTaken}
//               drawing = {drawing}
//           />

//           {/*The camera screen will show if no picture has been taken and the user is not drawing.*/}
//           {!photoTaken && !drawing ?
//               <TakePhotoScreen
//                   CallbackPhotoTaken = {handleImageTaken}
//               />

//               : photoTaken && !drawing ?

//                   <PreviewPhotoScreen
//                       photoURI = {image}
//                       CallbackDeletePhoto={handlePictureDeleted}
//                       CallbackAcceptPhoto={handlePictureAccepted}
//                   />

//                   :

//                   <DrawingScreen
//                     photoURI = {image}
//                   />

//           }

//       </View>
//     );


// }

// const DrawingScreen = (props) => {
//     const pan = useRef(new Animated.ValueXY()).current;

//     const panResponder = useRef(
//         PanResponder.create({
//             onMoveShouldSetPanResponder: () => true,
//             onPanResponderGrant: () => {
//                 pan.setOffset({
//                     x: pan.x._value,
//                     y: pan.y._value
//                 });
//             },
//             onPanResponderMove: Animated.event(
//                 [
//                     null,
//                     { dx: pan.x, dy: pan.y }
//                 ],
//                 {useNativeDriver: false}
//             ),
//             onPanResponderRelease: () => {
//                 pan.flattenOffset();
//             }
//         })
//     ).current;

//     return(

//         <View style={styles.container}>

//             <Image
//                 style = {styles.camera}
//                 source={{uri : props.photoURI}}
//             />

//             <View style={styles.cameraBar}>
//                 {/*Paintbrush button*/}
//                 <TouchableOpacity>
//                     <Text style={styles.text}>Draw</Text>
//                     <FontAwesome name="paint-brush" size={48} color="white" />
//                 </TouchableOpacity>

//                 {/*Clear button*/}
//                 <TouchableOpacity>
//                     <Text style={styles.text}>Clear</Text>
//                     <MaterialCommunityIcons name="eraser" size={50} color="white" />
//                 </TouchableOpacity>

//                 {/*Accept Button*/}
//                 <TouchableOpacity onPress={props.CallbackAcceptPhoto}>
//                     <Text style={styles.text}>Accept</Text>
//                     <Feather name="thumbs-up" size={50} color="green"/>
//                 </TouchableOpacity>
//             </View>


//             <Animated.View
//                 style={{
//                     position: 'absolute',
//                     transform: [{ translateX: pan.x }, { translateY: pan.y }]
//                 }}
//                 {...panResponder.panHandlers}
//             >
//                 <View style={styles.circle} />
//             </Animated.View>

//         </View>


//     );

// }

// const PreviewPhotoScreen = (props) => {

//     /*If the user has taken a picture they want to be able to accept or reject the image.
//     These following conditionals change the contents of the bottom bar to suit the needs of the page.
//     Ghost image functionality remains the same.
//     */
//     const [ghostImage, setGhostImage] = useState(true);

//     //Dialogue box stuff for the when the user rejects an image.
//     const [visible, setVisible] = useState(false);
//     const handleCancel = () => {
//         setVisible(false);
//     };
//     const handleDelete = () => {
//         props.CallbackDeletePhoto()
//         setVisible(false);

//     };
//     const showDialog = () => {
//         setVisible(true);
//     }

//     return(
//       <View style={styles.container}>

//           <Image
//               style = {styles.camera}
//               source={{uri : props.photoURI}}
//           />

//           {ghostImage && <Image
//               style={styles.image}
//               source={require('./cute.jpg')}
//           />}

//           {/*This dialogue box shows if the user is on the image preview screen and
//                 have chosen to re-take the image rather than save it.*/}
//           {visible &&
//               <Dialog.Container visible={visible}>
//                   <Dialog.Title>Do you want to delete this image?</Dialog.Title>
//                   <Dialog.Description>
//                       You cannot undo this action.
//                   </Dialog.Description>
//                   <Dialog.Button label={"Cancel"} onPress={handleCancel}/>
//                   <Dialog.Button label={"Delete"} onPress={handleDelete}/>
//               </Dialog.Container>
//           }

//           <View style={styles.cameraBar}>

//               {/*Accept image button*/}
//               <TouchableOpacity onPress={props.CallbackAcceptPhoto}>
//                   <Text style={styles.text}>Accept image</Text>
//                   <Feather name="thumbs-up" size={50} color="green"/>
//               </TouchableOpacity>

//               {/*Reject image button*/}
//               <TouchableOpacity onPress={showDialog}>
//                   <Text style={styles.text}>Try again</Text>
//                   <Feather name="thumbs-down" size={50} color="red"  />
//               </TouchableOpacity>

//               {/*Ghost image button*/}
//               <TouchableOpacity
//                   onPress={() => {
//                       setGhostImage(prevCheck => !prevCheck);
//                       console.log('show ghost image =', ghostImage)
//                   }}>
//                   {ghostImage ?
//                       <SimpleLineIcons name="ghost" size={50} color="white" />
//                       :
//                       <MaterialCommunityIcons name="ghost-off" size={50} color="white" />
//                   }
//               </TouchableOpacity>
//           </View>
//       </View>
//     );

// }

// const TakePhotoScreen = (props) => {
//     //CAMERA SCREEN
//     const [cameraRef, setCameraRef] = useState(null);
//     const [ghostImage, setGhostImage] = useState(true);
//     const [type, setType] = useState(Camera.Constants.Type.back);

//     const ChangeCameraFace = () => {
//         setType(
//             type === Camera.Constants.Type.back
//                 ? Camera.Constants.Type.front
//                 : Camera.Constants.Type.back
//         );
//     }

//     const TakePhoto = async() => {
//         if (cameraRef) {
//             let photo = await cameraRef.takePictureAsync();
//             props.CallbackPhotoTaken(photo.uri);
//             console.log('photo taken', photo);
//         }
//     }

//     const ToggleGhostImage = () => {
//         setGhostImage(prevCheck => !prevCheck);
//         console.log('show ghost image =', ghostImage)
//     }

//     return(
//       <View style={styles.container}>

//           <Camera
//               style={styles.camera}
//               type={type}
//               ref={ref => {setCameraRef(ref)}}
//           />

//           {/*Toggles the ghost image on and off when the user clicks the ghost image button.*/}
//           {ghostImage && <Image
//               style={styles.image}
//               source={require('./cute.jpg')}
//           />}

//           <View style={styles.cameraBar}>

//               {/*Camera flip button*/}
//               <TouchableOpacity onPress={ChangeCameraFace}>
//                   <MaterialCommunityIcons name="rotate-3d-variant" size={50} color="white" />
//               </TouchableOpacity>

//               {/*Take picture button*/}
//               <TouchableOpacity onPress={TakePhoto}>
//                 <MaterialCommunityIcons name="circle-slice-8" size={70} color="white" />
//               </TouchableOpacity>

//               {/*Ghost image button*/}
//               <TouchableOpacity onPress={ToggleGhostImage}>
//                   {ghostImage ?
//                       <SimpleLineIcons name="ghost" size={50} color="white" />
//                       :
//                       <MaterialCommunityIcons name="ghost-off" size={50} color="white" />
//                   }
//               </TouchableOpacity>


//           </View>

//       </View>
//     );
// }

// const ViewTopBar = (props) => {
//     const CameraHelp = () => {
//         return(
//             Alert.alert('Now is the time to photograph the part of the body you selected.' +
//                 ' You can use the outline to line up your photograph.' +
//                 ' It is best if someone takes the photograph for you whilst you stay still.'+
//                 '\n\nTips:\n-Natural light is best\n-Green or blue background\n-No shadows or'+
//                 ' make-up\n-Have the camera square on and steady')
//         );
//     }

//     const PreviewHelp = () => {
//         return(
//             Alert.alert('It is important to check that this image is a reliable photo of your mole.'+
//             '\nUse the ghost image to ensure that it is a similar distance from the camera as your'+
//             ' previous pictures.\nYou can reject this image and take another, or accept it and proceed.')
//         );
//     }

//     const DrawingHelp = () => {
//         return(
//             Alert.alert('For the far shot picture it is important to circle the specific mole you'+
//             ' are documenting. This helps ensure that anyone you show the image to knows what mole'+
//             ' is being discussed.\n\nTo start drawing, press on the paintbrush and use your finger'+
//                 ' to draw around the mole.\nTo clear drawings press the rubber.'+
//             '\n\nOnce you are happy with your circle, press the accept button'+
//             ' to proceed.')
//         );
//     }

//     return (
//         <SafeAreaView style={styles.topRow}>
//             <TouchableOpacity onPress={() => {
//                 {!props.photoTaken && !props.drawing ?
//                     CameraHelp()
//                     : props.photoTaken && !props.drawing ?
//                         PreviewHelp()
//                         :
//                             DrawingHelp()
//                 }
//             }}>
//                 <AntDesign name="questioncircleo" size={35} color="black" />
//             </TouchableOpacity>
//         </SafeAreaView>
//     );
// }

// const CameraScreenOG = () => {
//     const [hasPermission, setHasPermission] = useState(null);
//     const [type, setType] = useState(Camera.Constants.Type.back);
//     const [cameraRef, setCameraRef] = useState(null);
//     const [image, setImage] = useState(null);
//     const [ghostImage, setGhostImage] = useState(true);
//     const [photoTaken, setPhotoTaken] = useState(false);

//     //Drawing stuff
//     const [drawing, setDrawing] = useState(false);
//     const acceptImage = () => {
//         setDrawing(true);
//     }

//     //Handling the dialogue box for when the user wants to re-take an image.
//     const [visible, setVisible] = useState(false);
//     const handleCancel = () => {
//         setVisible(false);
//     };
//     const handleDelete = () => {
//         setPhotoTaken(false);
//         setVisible(false);

//     };
//     const showDialog = () => {
//         setVisible(true);
//     }

//     //Request the users permission to access their camera.
//     useEffect(() => {
//         (async () => {
//             const { status } = await Camera.requestPermissionsAsync();
//             setHasPermission(status === 'granted');
//         })();
//     }, []);

//     if (hasPermission === null) {
//         return <View />;
//     }
//     if (hasPermission === false) {
//         return <Text>No access to camera</Text>;
//     }
//     return (
//         <View style={styles.container}>
//             {/*Top bar includes the back button and the help button.*/}
//             <ViewTopBar/>

//             <View style={styles.container}>
//                 {/*If the user has not taken a picture then the screen should display the camera,
//                 if the user has taken a picture then it should display the image so they can check
//                 it is what they want.*/}
//                 {!photoTaken && !drawing ?
//                     <Camera
//                         style={styles.camera}
//                         type={type}
//                         ref={ref => {setCameraRef(ref)}}
//                     />

//                     : photoTaken && !drawing ?

//                         <Image
//                             style = {styles.camera}
//                             source={{uri : image}}
//                         />

//                         :

//                         <Image
//                             style = {styles.camera}
//                             source={{uri : image}}
//                         />

//                 }

//                 {/*Toggles the ghost image on and off when the user clicks the
//                 ghost image button.*/}
//                 {ghostImage && <Image
//                     style={styles.image}
//                     source={require('./cute.jpg')}
//                 />}

//                 {/*This dialogue box shows if the user is on the image preview screen and
//                 have chosen to re-take the image rather than save it.*/}
//                 {visible &&
//                         <Dialog.Container visible={visible}>
//                             <Dialog.Title>Do you want to delete this image?</Dialog.Title>
//                             <Dialog.Description>
//                                 You cannot undo this action.
//                             </Dialog.Description>
//                             <Dialog.Button label={"Cancel"} onPress={handleCancel}/>
//                             <Dialog.Button label={"Delete"} onPress={handleDelete}/>
//                         </Dialog.Container>
//                 }

//                     <View style={styles.cameraBar}>

//                     {/*If the user has not take a picture then the need to see the buttons related
//                     to the camera functionality. If the have taken a picture they want to be
//                     able to accept or reject the image. These following conditionals change the
//                     contents of the bottom bar to suit the needs to of the page.*/}

//                     {!photoTaken && !drawing ?
//                         <TouchableOpacity
//                             onPress={() => {
//                                 setType(
//                                     type === Camera.Constants.Type.back
//                                         ? Camera.Constants.Type.front
//                                         : Camera.Constants.Type.back
//                                 );
//                             }}>
//                             <MaterialCommunityIcons name="rotate-3d-variant" size={50} color="white" />
//                         </TouchableOpacity>

//                         : photoTaken && !drawing ?

//                             <View>
//                                 <TouchableOpacity onPress={acceptImage}>
//                                     <Text style={styles.text}>Accept image</Text>
//                                     <Feather name="thumbs-up" size={50} color="green"/>
//                                 </TouchableOpacity>
//                             </View>

//                             :

//                             <View>
//                                 <TouchableOpacity>
//                                     <Text style={styles.text}>Draw</Text>
//                                     <FontAwesome name="paint-brush" size={48} color="white" />
//                                 </TouchableOpacity>
//                             </View>

//                     }

//                     {!photoTaken && !drawing ?
//                         <TouchableOpacity
//                             onPress={async() => {
//                                 if (cameraRef) {
//                                     let photo = await cameraRef.takePictureAsync();
//                                     setImage(photo.uri);
//                                     setPhotoTaken(true);
//                                     console.log('photo taken', photo);
//                                 }
//                             }}>
//                             <MaterialCommunityIcons name="circle-slice-8" size={70} color="white" />
//                         </TouchableOpacity>

//                         : photoTaken && !drawing ?

//                             <View>
//                                 <TouchableOpacity onPress={showDialog}>
//                                     <Text style={styles.text}>Try again</Text>
//                                     <Feather name="thumbs-down" size={50} color="red"  />
//                                 </TouchableOpacity>
//                             </View>

//                             :

//                             <View>
//                                 <TouchableOpacity>
//                                     <Text style={styles.text}>Clear</Text>
//                                     <MaterialCommunityIcons name="eraser" size={50} color="white" />
//                                 </TouchableOpacity>
//                             </View>


//                     }

//                     <TouchableOpacity
//                         onPress={() => {
//                             setGhostImage(prevCheck => !prevCheck);
//                             console.log('show ghost image =', ghostImage)
//                         }}>
//                         {ghostImage ?
//                             <SimpleLineIcons name="ghost" size={50} color="white" />
//                             :
//                             <MaterialCommunityIcons name="ghost-off" size={50} color="white" />
//                         }

//                     </TouchableOpacity>

//                 </View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         backgroundColor: "white",
//         alignItems: "stretch",

//     },
//     topRow:{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     cameraBar:{
//         backgroundColor: "#71A1D1",
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//     },
//     camera:{
//         flex: 1,
//         flexDirection: 'column',
//         alignItems: 'stretch',
//     },
//     image: {
//         position: 'absolute',
//         top: 0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//         opacity: 0.6,
//         width: undefined,
//         height: undefined,
//         aspectRatio: 1.5,
//         resizeMode: 'contain',
//     },
//     text: {
//         color: 'white',
//         fontSize: 20,
//     },
//     confirmAlert: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },

//     circle :{
//         height: 100,
//         width: 100,
//         borderRadius: 50,
//         backgroundColor: 'transparent',
//         borderStyle : 'solid',
//         borderColor : 'red',
//         borderWidth : 5,
//     }
// });

// export default CameraScreen;
