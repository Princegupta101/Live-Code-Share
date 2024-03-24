import PropTypes from "prop-types"

import AppContext from "./AppContext"

function AppProvider({children}) {
  return (
   <AppContext>
        {children}
   </AppContext>
  )
}

AppProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AppProvider;