import Main from './screens/MainComponent';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import LoadingScreen from './screens/LoadingScreen';

const App = () => {
  const [loading, setLoading] = useState(true)
  const toggleLoadingScreen = () => { setLoading(!loading) }

  if (loading) {
    return (
      <TouchableOpacity style={{ flex: 1, backgroundColor: '#2F2D2D' }} onPress={() => toggleLoadingScreen()}>
        <LoadingScreen />
      </TouchableOpacity>
    )
  }

  return (
    <Main />
  );
}

export default App