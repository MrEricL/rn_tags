import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Tags from 'react-native-tags';

export default class App extends React.Component {
  render() {
    let initTags = ['dog', 'cat', 'chicken'];
    return (
      <View style={styles.container}>
        <Tags
          ref={tags1 => (this.tags1 = tags1)}
          initialText=""
          initialTags={[]}
          onChangeTags={tags => console.log(tags)}
          onTagPress = {
            (index, tagLabel) => {
              console.log(this.tags1); 
          }
          }
          containerStyle={{ justifyContent: 'center' }}
          inputStyle={{ backgroundColor: 'white' }}
        />
 
        <Tags
          ref={tags2 => (this.tags2 = tags2)}
          initialText="monkey"
          initialTags={initTags}
          onChangeTags={tags => {
            if (this.tags1) {
              const oldTags = this.tags1.state.tags;
              const tagThatWasAdded = this.tags2.state.tags.slice().pop();
              const newTags = oldTags.slice();
              newTags.push(`"${tagThatWasAdded}" added!`);
              this.tags1.setState({ tags: newTags });
            }
          }}
          onTagPress={(index, tagLabel) => {
            if (this.tags1) {
              //modifies the top tags
              const oldTags = this.tags1.state.tags;
              const newTags = oldTags.slice();
              newTags.push(`"${tagLabel}" pressed!`);
              this.tags1.setState({ tags: newTags });

              //modifies the bottom tags
              const oldTags2 = this.tags2.state.tags;
              const newTags2 = oldTags2.slice();
              newTags2.splice(index, 1);
              this.tags2.setState({ tags: newTags2 });
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
