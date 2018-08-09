import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Tags from 'react-native-tags';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

          <Tags
            ref={(tags1) => this.tags1 = tags1}
            initialText=""
            initialTags={[]}
            onChangeTags={tags => console.log(tags)}
            containerStyle={{ justifyContent: 'center' }}
            inputStyle={{ backgroundColor: 'white' }}
          />

          <Tags
            ref={(tags2) => this.tags2 = tags2}
            initialText="monkey"
            initialTags={['dog', 'cat', 'chicken']}
            onChangeTags={tags => {
              if (this.tags1) {
                const oldTags = this.tags1.state.tags;
                const tagThatWasAdded = this.tags2.state.tags.slice().pop();
                const newTags = oldTags.slice();
                newTags.push(`"${tagThatWasAdded}" was added!`);
                this.tags1.setState({tags: newTags}); 
              }
            }}
            onTagPress={(index, tagLabel) => {
              if (this.tags1) {
                const oldTags = this.tags1.state.tags;
                const newTags = oldTags.slice();
                newTags.push(`"${tagLabel}" was pressed!`);
                this.tags1.setState({tags: newTags});
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
