import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Settings221291Navigator from '../features/Settings221291/navigator';
import Settings221276Navigator from '../features/Settings221276/navigator';
import NotificationList221275Navigator from '../features/NotificationList221275/navigator';
import Maps221274Navigator from '../features/Maps221274/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Settings221291: { screen: Settings221291Navigator },
Settings221276: { screen: Settings221276Navigator },
NotificationList221275: { screen: NotificationList221275Navigator },
Maps221274: { screen: Maps221274Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
