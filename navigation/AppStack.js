import React from 'react';
// import CareerPath from '../screens/CareerPath';
// import FindaNewRole from '../screens/FindaNewRole';
// import OtherCustomToolsScreen from '../screens/OtherCustomToolsScreen';
// import ApplicationTrackerScreen from '../screens/ApplicationTrackerScreen';
// import JobBoardScreen from '../screens/JobBoardScreen';
// import ResumeScreen from '../screens/ResumeScreen';
// import ConselingScreen from '../screens/ConselingScreen';
// import NetworkingScreen from '../screens/NetworkingScreen';
// import TrainingScreen from '../screens/TrainingScreen';
// import InterviewTipsScreen from '../screens/InterviewTipsScreen';
// import ContactUsScreen from '../screens/ContactUsScreen';
// import CompanyReviewScreen from '../screens/CompanyReviewScreen';
// import IndustrySpecificScreen from '../screens/IndustrySpecificScreen';
// import AlternateApproachesScreen from '../screens/AlternateApproachesScreen';
import Welcome from '../pages/Welcome';
import Login from '../pages/Login';
import Otp from '../pages/Otp';
import Teacher from '../pages/Teacher';
import Forgotpassword from '../pages/Forgotpassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../component/Header';
// import LoginScreen from '../screens/LoginScreen';
// import RegisterScreen from '../screens/RegisterScreen';
// import ForgotScreen from '../screens/ForgotScreen';
// import ExploreRolePictureScreen from '../screens/ExploreRolePictureScreen';
// import HelpScreen from '../screens/HelpScreen';
// import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
// import TermsOfUseScreen from '../screens/TermsOfUseScreen';
// import ArticleScreen from '../screens/ArticleScreen';
// import HighestPayScreen from '../screens/HighestPayScreen';
// import MostCommonScreen from '../screens/MostCommonScreen';
// import SitemapScreen from '../screens/SitemapScreen';
// import SkillMatchScreen from '../screens/SkillMatchScreen';
// import WhoIsHiringScreen from '../screens/WhoIsHiringScreen';
// import WhoIsSponsoringScreen from '../screens/WhoIsSponsoringScreen';
// import RemoteWorkScreen from '../screens/RemoteWorkScreen';
// import WelcomeScreen from '../screens/WelcomeScreen';
// import ThankyouScreen from '../screens/ThankyouScreen';
// import OneRoleAtATimeScreen from '../screens/OneRoleAtATimeScreen';
// import BrowseAListScreen from '../screens/BrowseAListScreen';
// import OfferEvaluatorScreen from '../screens/OfferEvaluatorScreen';
// import PathfinderScreen from '../screens/PathfinderScreen';
// import RoleDetailsScreen from '../screens/RoleDetailsScreen';
// import ArticleDetailScreen from '../screens/ArticleDetailScreen';
// import MyScreen from '../screens/SearchScreen';
// import AllCuratedScreen from '../screens/AllCuratedScreen';
// import DegreeDetailsScreen from '../screens/DegreeDetailsScreen';
// import TrackYourApplication from '../screens/TrackYourApplication';
const Stack = createNativeStackNavigator();

const AppStack = ({token}) => {
  
  return (
    
    <Stack.Navigator initialRouteName='Home'  screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login} 
        
        />
      <Stack.Screen name='Otp' component={Otp}/>
      {token && <Stack.Screen name='Teacher' component={Teacher}/>}
      <Stack.Screen name='Forgotpassword' component={Forgotpassword}/>
        {/* <Stack.Screen name='Register' component={RegisterScreen }/>
        <Stack.Screen name='About' component={AboutUsScreen }/>
        <Stack.Screen name='Tree' component={TreeScreen }/>
        <Stack.Screen name='Alternate' component={AlternateApproachesScreen }/>
        <Stack.Screen name='Industry' component={IndustrySpecificScreen }/>
        <Stack.Screen name='Training' component={TrainingScreen }/>
        <Stack.Screen name='Company' component={CompanyReviewScreen }/>
        <Stack.Screen name='Interview' component={InterviewTipsScreen }/>
        <Stack.Screen name='Networking' component={NetworkingScreen }/>
        <Stack.Screen name='Conseling' component={ConselingScreen }/>
        <Stack.Screen name='JobBoard' component={JobBoardScreen }/>
        <Stack.Screen name='Resume' component={ResumeScreen }/>
        <Stack.Screen name='Application' component={ApplicationTrackerScreen }/>
        <Stack.Screen name='CustomTool' component={OtherCustomToolsScreen }/>
        <Stack.Screen name='NewRole' component={FindaNewRole }/>
        <Stack.Screen name='Career' component={CareerPath }/>
        <Stack.Screen name='Recover' component={ForgotScreen }/>
        <Stack.Screen name='Contact' component={ContactUsScreen}/>
        <Stack.Screen name='RolePic' component={ExploreRolePictureScreen }/>
        <Stack.Screen name='Help' component={HelpScreen }/>
        <Stack.Screen name='Private' component={PrivacyPolicyScreen }/>
        <Stack.Screen name='Terms' component={TermsOfUseScreen }/>
        <Stack.Screen name='Articles' component={ArticleScreen }/>
        <Stack.Screen name='HighestPay' component={HighestPayScreen }/>
        <Stack.Screen name='MostCommon' component={MostCommonScreen }/>
        <Stack.Screen name='Sitemap' component={SitemapScreen }/>
        
        <Stack.Screen name='HiringCompanies' component={WhoIsHiringScreen }/>
      
        <Stack.Screen name='RemoteWork' component={RemoteWorkScreen }/>
        <Stack.Screen name='Welcome' component={WelcomeScreen }/>
        <Stack.Screen name='Thankyou' component={ThankyouScreen }/>
 
        <Stack.Screen name='Pathfinder' component={PathfinderScreen }/>
  
        <Stack.Screen name='RoleDetails' component={RoleDetailsScreen }/>
        <Stack.Screen name='ArticleDetails' component={ArticleDetailScreen }/>
        <Stack.Screen name='my' component={MyScreen }/>
        <Stack.Screen name='All' component={AllCuratedScreen }/>
        <Stack.Screen name='Degree' component={DegreeDetailsScreen }/> */}
    </Stack.Navigator>
  );
};

export default AppStack;
