import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
//import Tags from "react-native-tags";
import Tags from "./react-native-tags"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      custom: true,
      initTags: ["dog", "cat", "chicken"],
      initTagsCustom: ["dog", "cat", "chicken", "Add Custom"],
    }
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Tags
          readonly = {true}
          ref={userTags => (this.userTags = userTags)}
          //tagContainerStyle = {styles.tagColor}
          initialText=""
          initialTags={[]}
          onChangeTags={tags => console.log()} //console.log(tags)}
          onTagPress={(index, tagLabel) => {
            if (this.userTags) {
              if (this.state.initTags.includes(tagLabel)) {
                const oldrecTags = this.recTags.state.tags;
                const newrecTags = oldrecTags.slice();
                newrecTags.push(tagLabel);
                this.recTags.setState({ tags: newrecTags });
              }
            }
          }}
          containerStyle={{ justifyContent: "center" }}
          inputStyle={{ backgroundColor: "white" }}
        />

        <Tags
          ref={recTags => (this.recTags = recTags)}
          readonly = {this.state.custom}
          initialText=""
          initialTags={this.state.initTagsCustom}
          onChangeTags={tags => {
            if (this.userTags) {
              //Pass
            }
          }}
          onTagPress={(index, tagLabel) => {
            if (this.userTags) {

              if (tagLabel == "Add Custom" ){
                this.setState({custom: false});
              }
              else{
              //modifies the top tags
              const oldTags = this.userTags.state.tags;
              const newTags = oldTags.slice();
              newTags.push(`${tagLabel}`);
              this.userTags.setState({ tags: newTags });

            }


            }
          }}
          containerStyle={{ justifyContent: "center" }}
          inputStyle={{ backgroundColor: "white" }}
        />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
    padding: 20
  },
  //tagColor: {
  //  backgroundColor: "yellow"
  //}
});
