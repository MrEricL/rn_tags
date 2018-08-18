import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
//import Tags from "react-native-tags";
import Tags from './react-native-tags';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recTagsIsReadOnly: true,
      userTagsArray: [],
      recTagsArray: ['dog', 'cat', 'chicken', 'Add Custom'],
    };
  }

  render() {
    const recLen = this.state.recTagsArray.length;
    return (
      <View style={styles.container}>
        <Tags
          readonly={true}
          ref={userTags => (this.userTags = userTags)}
          initialText=""
          initialTags={this.state.userTagsArray}
          onChangeTags={tags => console.log()} //console.log(tags)}
          onTagPress={(index, tagLabel) => {
            if (this.userTags) {
              //adds to other array
              const oldrecTags = this.state.recTagsArray;
              const newrecTags = oldrecTags.slice();
              this.state.recTagsIsReadOnly
                ? newrecTags.splice(recLen - 1, 0, tagLabel)
                : newrecTags.push(tagLabel);

              //removes on click
              this.state.userTagsArray.splice(index, 1);
              this.setState({ recTagsArray: newrecTags });
            }
          }}
          containerStyle={{ justifyContent: 'center' }}
          inputStyle={{ backgroundColor: 'white' }}
        />

        <Tags
          ref={recTags => (this.recTags = recTags)}
          readonly={this.state.recTagsIsReadOnly}
          initialTags={this.state.recTagsArray}
          onChangeTags={tags => {
            if (this.userTags) {
              /* Ref System Example
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
              if (tagLabel == 'Add Custom') {
                this.setState({ recTagsIsReadOnly: false });
                //removes the custom
                this.state.recTagsArray.splice(recLen - 1, 1);
              } else {
                //modifies the top tags
                const oldTags = this.state.userTagsArray;
                const newTags = oldTags.slice();
                newTags.push(tagLabel);
                //removes
                this.state.recTagsArray.splice(index, 1);
                this.setState({ userTagsArray: newTags });
              }
            }
          }}
          containerStyle={{ justifyContent: 'center' }}
          inputStyle={{ backgroundColor: 'white' }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
});
