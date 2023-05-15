import MainComponent from './screens/MainComponent';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import LoadingScreen from './screens/LoadingScreen';
import constants from './utility/constants';

const App = () => {
  const [loading, setLoading] = useState(true)
  const toggleLoadingScreen = () => { setLoading(!loading) }

  if (loading) {
    setTimeout(toggleLoadingScreen, constants.LOADING_LENGTH_IN_MILLISECONDS)

    return (
      <TouchableOpacity style={{ flex: 1, backgroundColor: '#2F2D2D' }} onPress={() => toggleLoadingScreen()}>
        <LoadingScreen />
      </TouchableOpacity>
    )
  }

  return (
    <MainComponent />
  );
}

export default App