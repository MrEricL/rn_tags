import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Tags from "react-native-tags";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let initTags = ["dog", "cat", "chicken"];
    return (
      <View style={styles.container}>
        <Tags
          ref={userTags => (this.userTags = userTags)}
          //tagContainerStyle = {styles.tagColor}
          initialText=""
          initialTags={[]}
          onChangeTags={tags => console.log()} //console.log(tags)}
          onTagPress={(index, tagLabel) => {
            if (this.userTags) {
              if (initTags.includes(tagLabel)) {
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
          //readonly = {true}
          initialText="monkey"
          initialTags={initTags}
          onChangeTags={tags => {
            if (this.userTags) {
              /*
              const oldTags = this.userTags.state.tags;
              const tagThatWasAdded = this.recTags.state.tags.slice().pop();
              const newTags = oldTags.slice();
              newTags.push(`${tagThatWasAdded} l`);
              this.userTags.setState({ tags: newTags });

              
              const oldrecTags = this.recTags.state.tags;
              const newrecTags = oldrecTags.slice();
              console.log(newrecTags.slice())
              console.log(newrecTags.slice(-1))
              this.recTags.setState({ tags: newrecTags });
              */
            }
          }}
          onTagPress={(index, tagLabel) => {
            if (this.userTags) {
              //modifies the top tags
              const oldTags = this.userTags.state.tags;
              const newTags = oldTags.slice();
              newTags.push(`${tagLabel}`);
              this.userTags.setState({ tags: newTags });

              //modifies the bottom tags
              //const oldrecTags = this.recTags.state.tags;
              //const newrecTags = oldrecTags.slice();
              //newrecTags.splice(index, 1);
              //this.recTags.setState({ tags: newrecTags });
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
  tagColor: {
    backgroundColor: "yellow"
  }
});
