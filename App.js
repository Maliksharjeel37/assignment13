
import {  ScrollView } from 'react-native';
import Stap1 from "./src/screens/Stap1/stap1"
import Stap2 from "./src/screens/Stap2/stap2"
import Stap3 from "./src/screens/Stap3/stap3"
import AArrangementpage from "./src/screens/AArrangementpage/App"
import DetailsPage from "./src/screens/detailsPage/App"
import IndrodutionPage from "./src/screens/indrodutionPage/App"
import LoginPage from "./src/screens/loginPage/App"
import SignupPage from "./src/screens/signupPage/App"
import Socialsharingpage from "./src/screens/Social-sharing-page/socail"
import Communicationpage from "./src/screens/Communication-page/App"
const App = () => {
  return (
    <ScrollView>
      <Stap1/>
      <Stap2/>
     <Stap3/>
<AArrangementpage/>
 <DetailsPage/>
<IndrodutionPage/>
<LoginPage/>
<SignupPage/>
<Socialsharingpage/>
<Communicationpage/> 
    </ScrollView>
  );
}

export default App;





