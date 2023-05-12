import { Button, View, IScrollViewProps, Spinner } from 'native-base';
import React, { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import YoutubePlayer, { PLAYER_STATES } from 'react-native-youtube-iframe';

const VideoPlayer: React.FC<IScrollViewProps> = () => {
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  const onStateChange = useCallback(
    (state: string) => {
      if (state === PLAYER_STATES.ENDED) {
        setPlaying(false);
        Alert.alert('video has finished playing!');
      }
    },
    [setPlaying]
  );

  const onReady = useCallback(() => {
    setReady(true);
  }, [setReady]);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View>
      {!ready && (
        <View alignItems="center" justifyContent="center">
          <Spinner color="red.100" size="lg" />
        </View>
      )}
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={'0GOUF8vNqzE'}
        onChangeState={onStateChange}
        onReady={onReady}
        onFullScreenChange={(s) => console.log(s)}
      />
      <Button onPress={togglePlaying}>{playing ? 'pause' : 'play'}</Button>
    </View>
  );
};

export default VideoPlayer;
