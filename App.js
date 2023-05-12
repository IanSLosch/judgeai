import Main from './screens/MainComponent';
import LoadingScreen from './screens/LoadingScreen';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';




export default function App() {
  const [loading, setLoading] = useState(true)

  const toggleLoadingScreen = () => {
    setLoading(!loading)
  }
  
  if (loading) {
    return(
      <TouchableOpacity style={{ flex: 1, backgroundColor: '#2F2D2D' }} onPress={() => toggleLoadingScreen()}>
        <LoadingScreen />
      </TouchableOpacity>
    )
  }
  
  return (
    <Main />
  );
}