import './App.css';
import React from 'react';
import {WebView} from "react-native-webview";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebView source ={{uri:'https://www.connect-street.fr/'}}
                 style={{ marginTop: '10 %' }}
                 sharedCookiesEnabled={true}
              third PartyCookiesEnabled={true}
        />
      </header>
    </div>
  );
}

export default App;
