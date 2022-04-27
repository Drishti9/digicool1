import * as Speech from "expo-speech";

import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Dimensions,
} from "react-native";
import colors from "./colors";
import { Ionicons } from "@expo/vector-icons";
// import { PowerTranslator, ProviderTypes, TranslatorConfiguration, TranslatorFactory } from 'react-native-power-translator';
import MyView from "./MyView";

const styles = StyleSheet.create({
  input: {
    height: 48,
    alignItems: "center",
    padding: 8,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  default: {
    flex: 1,
    fontSize: 14,
    padding: 4,
    fontWeight: "400",
    justifyContent: "center",
  },
  inputView: {
    borderWidth: 1,
    height: 32,
    padding: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  inputHidden: {
    height: 48,
    alignItems: "center",
    padding: 8,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "black",
  },
});

const { lightGray, gray } = colors;

export default function ComposeMail(props) {

  const axios = require("axios");

  const options = {
    method: "POST",
    url: "https://deep-translate1.p.rapidapi.com/language/translate/v2",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Host": "deep-translate1.p.rapidapi.com",
      "X-RapidAPI-Key": "cf7f17cfbemshbf73799ac68e9f0p1913c9jsn047de456cd28",
    },
    //data: '{"q":"hello","source":"en","target":"hi"}'
  };

  const l=props.lang;


  // const l="hi";
  // const language = {lang};
  // if (language==="English")
  // {
  //   l="en";
  // }
  // else if (language==="हिन्दी")
  // {
  //   l="hi";
  // }
  // else if(language==="ગુજરાતી"){
  //   l="gu"; 
  // }
  // else if(language==="বেঙ্গল")
  // {
  //   l="bn";
  // }
  // else if(language==="मराठी")
  // {
  //   l="mr";
  // }
  // else if (language==="ਪੰਜਾਬੀ")
  // {
  //   l="pa";
  // };



  const buttonResponse = (str) => {
    options.data = JSON.stringify({
      q: `${str}`,
      source: "en",
      target: `${l}`,
    });

    axios
      .request(options)
      .then(function (response) {
        Speech.speak(
          response.data.data.translations.translatedText,
          voice_options
        );
        console.log(Speech.getAvailableVoicesAsync());
        //console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const [isHiddenFrom, setIsHiddenFrom] = useState(false);
  const [isHiddenTo, setIsHiddenTo] = useState(false);
  const [isHiddenSubject, setIsHiddenSubject] = useState(false);
  const [isHiddenMessage, setIsHiddenMessage] = useState(false);
  const [isHiddenBlackout, setIsHiddenBlackout] = useState(false);

  //buttonResponse("Enter receiver's email address")
  //console.log(str1)

  // const speakAbout = () => {
  //   const about="ter reciever's email here";
  //   if (case == 1){
  //      const about = "enter reciever's email here";
  //    }
  //   Speech.speak(about, options);
  //  };

  const voice_options = {
    voice: "hi-in-x-hid-network",
    volume: 1000,
  };

  const listAllVoiceOptions = async () => {
    let voices = await Speech.getAvailableVoicesAsync();
    //console.log(voices);
  };

  React.useEffect(listAllVoiceOptions);

  const { lightGray, gray } = colors;

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
      }}
      {...props}
    >
      <View
        style={{
          padding: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottomColor: lightGray,
          borderBottomWidth: 0.7,
        }}
      >
        <TouchableOpacity onPress={props.onPress}>
          <Ionicons name="ios-arrow-back" color="gray" size={24} />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Ionicons
            name="md-attach"
            color="gray"
            size={24}
            style={{ opacity: isHiddenTo ? 0.3 : 1, paddingRight: 24 }}
          />

          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="md-send" color="gray" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[styles.input, { opacity: isHiddenTo ? 0.3 : 1 }]}
        pointerEvents={isHiddenTo ? "none" : "auto"}
      >
        <View>
          <TextInput
            style={styles.default}
            placeholder="To"
            placeholderTextColor={gray}
          />
        </View>
        <View
          style={{
            alignItem: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              buttonResponse("Enter receiver's email address.");
            }}
          >
            <Ionicons name="volume-medium" color="gray" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <MyView
        style={[styles.input, { opacity: isHiddenTo ? 0.3 : 1 }]}
        hide={isHiddenFrom}
      >
        <TextInput
          style={styles.default}
          placeholder="From"
          placeholderTextColor={gray}
        />
        <View
          style={{
            alignItem: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              buttonResponse("Enter your email address.");
            }}
          >
            <Ionicons name="volume-medium" color="gray" size={30} />
          </TouchableOpacity>
        </View>
      </MyView>

      <MyView
        style={[styles.input, { opacity: isHiddenTo ? 0.3 : 1 }]}
        hide={isHiddenSubject}
      >
        <TextInput
          style={styles.default}
          placeholder="Subject"
          placeholderTextColor={gray}
        />
        <View
          style={{
            alignItem: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              buttonResponse("Enter subject. It's optional.");
            }}
          >
            <Ionicons name="volume-medium" color="gray" size={30} />
          </TouchableOpacity>
        </View>
      </MyView>

      <MyView
        style={[styles.input, { opacity: isHiddenTo ? 0.3 : 1, height: 500 }]}
        hide={isHiddenMessage}
      >
        <TextInput
          style={styles.default}
          multiline
          autoFocus
          placeholder="Compose email"
          placeholderTextColor={gray}
        />
        <View
          style={{
            alignItem: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              buttonResponse("Enter your message here.");
            }}
          >
            <Ionicons name="volume-medium" color="gray" size={24} />
          </TouchableOpacity>
        </View>
      </MyView>

      {/* <MyView style={{
       backgroundColor:"black",
       height: windowHeight,
       width:windowWidth,
       }} hide={isHiddenBlackout}>
         <View></View>
       </MyView> */}
    </View>
  );
}

// const axios = require("axios");

// const encodedParams = new URLSearchParams();
// //encodedParams.append("q", "Hello, world!");
// encodedParams.append("target", "hi");
// encodedParams.append("source", "en");

// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'e1da648636msh8b8185c84547f9ap1b51b9jsn8ec6899970d2'
//   },
//   //data: encodedParams
// };

// const lang="hi";

// const buttonResponse=(str)=>
// {
//   encodedParams.append("q", str);
//   options.data=encodedParams;
//   axios.request(options).then(function (response) {
//     console.log(response.data);
//     //console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });
// }

// const voice_options = {
//   voice:"hi-in-x-hid-network"
// };

// const listAllVoiceOptions = async () => {
//   let voices=await Speech.getAvailableVoicesAsync();
//   //console.log(voices);
// };

// React.useEffect(listAllVoiceOptions);

// class ComposeMail extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       isHiddenFrom: true,
//       isHiddenTo:false,
//       isHiddenSubject:false,
//       isHiddenMessage:false
//     };
//   }

//   //buttonResponse("Enter receiver's email address")
//   //console.log(str1)

//   // const speakAbout = () => {
//   //   const about="enter reciever's email here";
//   //   if (case == 1){
//   //      const about = "enter reciever's email here";
//   //    }
//   //   Speech.speak(about, options);
//   //  };
//   render(){
//   return (
//     <View
//       style={{
//         flex: 1,
//         paddingTop: 20,
//       }}
//       {...props}
//     >
//       <View style={{
//       backgroundColor:"black"
//       }}></View>

//       <View style={{
//         padding: 16,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         borderBottomColor: lightGray,
//         borderBottomWidth: 0.7,
//       }}>
//         <TouchableOpacity
//           onPress={props.onPress}
//         >
//           <Ionicons name='ios-arrow-back' color='gray' size={24} />
//         </TouchableOpacity>
//         <View style={{
//           flexDirection: 'row',
//           justifyContent: 'space-around',
//         }}>
//           <Ionicons name='md-attach' color='gray' size={24} style={{ paddingRight: 24 }} />
//           <Ionicons name='md-send' color='gray' size={24} />
//         </View>
//       </View>

//       <MyView style={styles.input} hide={this.state.isHiddenFrom}>
//         <View>
//           <TextInput style={styles.default} placeholder='To' placeholderTextColor={gray} />
//         </View>
//         {/* <View style={{alignItem:'center'}}><Button title='check translate' onPress={()=>buttonResponse("Enter receiver's email address")}></Button></View> */}
//         <View style={{
//           alignItem:'flex-end',
//         }}>
//           <TouchableOpacity onPress={() => {Speech.speak("Enter receiver's email address", voice_options)}}>
//             <Ionicons name='volume-medium' color='gray' size={24} />
//           </TouchableOpacity>
//         </View>
//       </MyView>

//       <MyView style={styles.input} hide={this.state.isHiddenTo}>
//         <TextInput style={styles.default} placeholder='From' placeholderTextColor={gray} />
//         <View style={{
//           alignItem:'flex-end',
//         }}>
//           <TouchableOpacity onPress={() => {Speech.speak("तुमचा ईमेल टाका", options)}}>
//             <Ionicons name='volume-medium' color='gray' size={24} />
//           </TouchableOpacity>
//         </View>
//       </MyView>
//       <MyView style={styles.input} hide={this.state.isHiddenSubject}>
//         <TextInput style={styles.default} placeholder='Subject' placeholderTextColor={gray} />
//         <View style={{
//           alignItem:'flex-end',
//         }}>
//           <TouchableOpacity onPress={() => {Speech.speak("Enter Subject. It's optional", options)}}>
//             <Ionicons name='volume-medium' color='gray' size={24} />
//           </TouchableOpacity>
//         </View>
//       </MyView>
//       <MyView style={[styles.input, { height: 500}]} hide={this.state.isHiddenMessage}>
//         <TextInput
//           style={styles.default}
//           multiline
//           autoFocus
//           placeholder='Compose email'
//           placeholderTextColor={gray}
//         />
//         <View style={{
//           alignItem:'flex-end',
//         }}>
//           <TouchableOpacity onPress={() => {Speech.speak("Message", options)}}>
//             <Ionicons name='volume-medium' color='gray' size={24} />
//           </TouchableOpacity>
//         </View>
//       </MyView>
//     </View>
//   );
//   }
// }
