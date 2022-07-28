import logo from './logo.svg';
import './App.css';
import Iframe from 'react-iframe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Iframe width="100%" height="100%"
    src="https://forms.office.com/Pages/ResponsePage.aspx?id=-dLyB8mx6EewDKWQPMYedMPoWy6UfSdFv7xPndjQqGpUM1NCUU0xTVRUM1lXSThSTEc5VFlSNzBGNC4u&embed=true"
    frameBorder="0" marginWidth="0" marginHeight="0" style="border: none; max-width:100%; max-height:100vh"
    allowFullScreen webkitallowfullscreen mozallowfullscreen msallowfullscreen/>
      </header>
    </div>
  );
}

export default App;
