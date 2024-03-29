import PropTypes from "prop-types"
import { useContext } from "react"
import Split from "react-split"

import TabContext from "../../context/TabContext"
import useLocalStorage from "../../hooks/useLocalStorage"
import useWindowDimensions from "../../hooks/useWindowDimensions"

function SplitterComponent({ children }) {
    const { isSidebarOpen } = useContext(TabContext)
    const { isMobile, width } = useWindowDimensions()
    const { setItem, getItem } = useLocalStorage()
   
    const getGutter = () => {
        const gutter = document.createElement("div")
        gutter.style.height = "100%"
        gutter.style.cursor = "e-resize"
        gutter.style.backgroundColor = "#e1e1ffb3"
        return gutter
    }

    const getSizes = () => {
        if (isMobile) return [0, width]
        const sizes = JSON.parse(getItem("editorSizes")) || [35, 65]
        return isSidebarOpen ? sizes : [0, width]
    }

    const getMinSizes = () => {
        if (isMobile) return [0, width]
        return isSidebarOpen ? [350, 350] : [50, 0]
    }

    const getMaxSizes = () => {
        if (isMobile) return [0, Infinity]
        return isSidebarOpen ? [Infinity, Infinity] : [0, Infinity]
    }

    const handleGutterDrag = (sizes) => {
        setItem("editorSizes", JSON.stringify(sizes))
    }

    const getGutterStyle = () => ({
        width: "5px",
        display: isSidebarOpen && !isMobile ? "block" : "none",
    })

    return (
        <Split
            sizes={getSizes()}
            minSize={getMinSizes()}
            gutter={getGutter}
            maxSize={getMaxSizes()}
            dragInterval={1}
            direction="horizontal"
            gutterAlign="center"
            cursor="e-resize"
            snapOffset={30}
            gutterStyle={getGutterStyle}
            onDrag={handleGutterDrag}
            className="flex h-screen min-h-screen max-w-full items-center justify-center overflow-x-hidden"
        >
            {children}
        </Split>
    )
}

SplitterComponent.propTypes = {
    children: PropTypes.node,
}

export default SplitterComponent