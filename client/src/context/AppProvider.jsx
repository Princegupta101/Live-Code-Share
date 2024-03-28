import PropTypes from "prop-types"

import {AppContextProvider} from "./AppContext"
import {FileContextProvider} from "./FileContext";
import { TabContextProvider } from "./TabContext";

function AppProvider({children}) {
  return (
   <AppContextProvider>
      <FileContextProvider>
          <TabContextProvider>
             {children}
          </TabContextProvider>
      </FileContextProvider>
   </AppContextProvider>
  )
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AppProvider;