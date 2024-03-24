import Loading from "../components/loading/Loading";
import EditorPage from "../pages/EditorPage"
import useSocket from "../socket/useSocket"
import socketStatus from "../utils/socketStatus"

function EditorLayout() {
    const { status } = useSocket()

    return status !== socketStatus.CONNECTED ? (
        <Loading status={status} />
    ) : (
        <EditorPage />
    )
}

export default EditorLayout