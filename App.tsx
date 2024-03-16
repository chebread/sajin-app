import React, { useRef } from 'react';
import { SafeAreaView } from 'react-native';
import WebView from 'react-native-webview';
import styled from 'styled-components/native';

const App = () => {
  const webviewRef = useRef(null);

  return (
    <StyledSafeAreaView>
      <StyleWebView ref={webviewRef} source={{ uri: 'https://sajin.page' }} />
    </StyledSafeAreaView>
  );
};

export default App;

const StyledSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const StyleWebView = styled(WebView)``;
