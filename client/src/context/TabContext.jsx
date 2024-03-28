import PropTypes from "prop-types"
import { createContext, useState } from "react"

import { Files, Users} from "@phosphor-icons/react"

import ClientsTab from "../components/tabs/ClientsTab"
import FilesTab from "../components/tabs/FilesTab"
import useWindowDimensions from "../hooks/useWindowDimensions"
import TABS from "../utils/tabs"

const TabContext = createContext()

function TabContextProvider({ children }) {
    const { isMobile } = useWindowDimensions()
    const [activeTab, setActiveTab] = useState(TABS.FILES)
    const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile)
    const [tabComponents, setTabComponents] = useState({
        [TABS.FILES]: <FilesTab />,
        [TABS.CLIENTS]: <ClientsTab />,
    })
    const tabIcons = {
        [TABS.FILES]: <Files size={32} />,
        [TABS.CLIENTS]: <Users size={30} />,
    }

    return (
        <TabContext.Provider
            value={{
                activeTab,
                setActiveTab,
                isSidebarOpen,
                setIsSidebarOpen,
                tabComponents,
                setTabComponents,
                tabIcons,
            }}
        >
            {children}
        </TabContext.Provider>
    )
}

TabContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { TabContextProvider }
export default TabContext