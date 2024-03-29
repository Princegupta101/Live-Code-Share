import EditorComponent from "../components/editor/EditorComponent";
import Sidebar from "../components/sidebar/Sidebar";
import SplitterComponent from "../components/Splitter/SplitterComponent"

export default function EditorPage() {
  return (
    <SplitterComponent>
      <Sidebar/>
      <EditorComponent/>
    </SplitterComponent>
  )
}
