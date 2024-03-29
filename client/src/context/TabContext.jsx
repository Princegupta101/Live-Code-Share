import PropTypes from "prop-types"
import { createContext, useState } from "react"

import { Files, Users,Gear, Chats} from "@phosphor-icons/react"

import ChatsTab from "../components/tabs/ChatsTab"
import ClientsTab from "../components/tabs/ClientsTab"
import FilesTab from "../components/tabs/FilesTab"
import SettingsTab from "../components/tabs/SettingsTab"
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
        [TABS.SETTINGS]: <SettingsTab />,
        [TABS.CHATS]: <ChatsTab />,
    })
    const tabIcons = {
        [TABS.FILES]: <Files size={32} />,
        [TABS.CLIENTS]: <Users size={30} />,
        [TABS.SETTINGS]: <Gear size={30} />,
        [TABS.CHATS]: <Chats size={32} />,
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