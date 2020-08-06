import React, {useContext} from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity} from 'react-native';

import AppSearch from '../components/AppSearch';
import ListingSongs from '../components/ListingSongs';
import SongsContext from '../contexts/songsContext';

const SearchScreen = ({navigation}) => {
  const {handlePress, videos, handleValue, handleFetch, colors} = useContext(
    SongsContext,
  );

  return (
    <View style={[styles.container, {backgroundColor: colors.black}]}>
      <AppSearch
        style={[styles.appSearch, {backgroundColor: colors.dark}]}
        onPress={handleFetch}
        setValue={handleValue}
        autoCompleteType="off"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search..."
        placeholderTextColor={colors.medium}
      />
      {videos.length !== false && (
        <FlatList
          keyboardShouldPersistTaps="always"
          data={videos}
          keyExtractor={({id}) => id.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={handlePress(index, navigation, item.id)}>
                <ListingSongs
                  title={item.snippet.title}
                  thumbnail={item.snippet.thumbnails.default}
                  contentDetails={item.contentDetails}
                  statistics={item.statistics}
                  style={[styles.song, {backgroundColor: colors.medium}]}
                  songStyle={styles.songStyle}
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
    width: '80%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  song: {
    borderBottomWidth: 1,
    flex: -1,
  },
  songStyle: {
    flex: -1,
    width: '100%',
    paddingTop: 4,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 9,
  },
});

export default SearchScreen;
