import MainPageComponent from '../main-page-component/main-page-component';


type AppScreenProps = {
  offersCount: number;
}

function App({offersCount}: AppScreenProps): JSX.Element {
  return(
    <MainPageComponent offersCount={offersCount} />
  );
}

export default App;
