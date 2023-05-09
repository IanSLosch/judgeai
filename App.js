import Main from './screens/MainComponent';
import LoadingScreen from './screens/LoadingScreen';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';




export default function App() {
  const [loading, setLoading] = useState(true)

  const bypassLoadingScreen = () => {
    setLoading(false)
  }
  
  if (loading) {
    return(
      <TouchableOpacity style={{ flex: 1, backgroundColor: '#2F2D2D' }} onPress={() => bypassLoadingScreen()}>
        <LoadingScreen />
      </TouchableOpacity>
    )
  }
  
  return (
    <Main />
  );
}