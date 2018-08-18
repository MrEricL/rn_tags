# rn_tags
Creating a simple tag system in React Native. Based on the idea of a user selecting from a suggested list and adding that to their tags. 

This was made modifying the [react-native-tags](https://github.com/peterp/react-native-tags) library.


#### What's New?
* Changed the library so that `readonly` prop allows for interaction 
* Adds two `Tag` elements, one as storage and the other to add to storage
	* Based on the idea of a user selecting tags they want from suggested tags
* Added "Add Custom" in the array so users can choose if they want to add their own tag
 	* Linked with the boolean `recTagsIsReadOnly`
 	* QoL stuff with the "Add Custom"
* Implements a ref system for further customization (check commented code for a sample)
	* Refs would utilize the `onChangeTags` prop
	* Currently uses state variables to control the flow

#### What's Next?
* Color
	* Applying color to each tag independently rather uniformly.
* Colors that are associated with certain words
* Pretty colors

#### Credits
Check out [react-native-tags](https://github.com/peterp/react-native-tags) for the original library!
