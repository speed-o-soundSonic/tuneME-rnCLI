import React, {useContext} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

import AppSearch from '../components/AppSearch';
import ListingSongs from '../components/ListingSongs';
import SongsContext from '../contexts/songsContext';

const SearchScreen = ({navigation}) => {
  const {handlePress, videos, handleValue, handleFetch} = useContext(
    SongsContext,
  );

  return (
    <View style={styles.container}>
      <AppSearch
        style={styles.appSearch}
        onPress={handleFetch}
        setValue={handleValue}
        autoCompleteType="off"
        autoCapitalize="none"
        autoCorrect={false}
      />
      {videos.length !== false && (
        <FlatList
          data={videos}
          keyExtractor={({id}) => id.videoId}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity onPress={handlePress(index, navigation)}>
                <ListingSongs
                  title={item.snippet.title}
                  description={item.snippet.description}
                  thumbnail={item.snippet.thumbnails.default}
                />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appSearch: {
    marginTop: 10,
  },
  container: {
    padding: 10,
    flex: 1,
  },
});

export default SearchScreen;
