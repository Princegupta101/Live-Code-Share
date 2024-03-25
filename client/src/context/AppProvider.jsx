import PropTypes from "prop-types"

import {AppContextProvider} from "./AppContext"
import {FileContextProvider} from "./FileContext";

function AppProvider({children}) {
  return (
   <AppContextProvider>
      <FileContextProvider>
          {children}
      </FileContextProvider>
   </AppContextProvider>
  )
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AppProvider;