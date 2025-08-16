import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScreenContent } from '@/components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import JoinOurNetwork from '@/Screens/JoinOurNetwork';

import './global.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      {!isLoggedIn ? (
        <>
          <JoinOurNetwork />
          <StatusBar style="auto" />
        </>
      ) : (
        <>
          <ScreenContent title="Home" path="App.tsx" />
          <StatusBar style="auto" />
        </>
      )}
    </SafeAreaProvider>
  );
}
