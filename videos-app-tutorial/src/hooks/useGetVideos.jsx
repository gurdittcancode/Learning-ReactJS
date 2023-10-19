import { useContext } from "react";
import VideosContext from "../context/VideosContext";

function useGetVideos() {
    return useContext(VideosContext);
}

export default useGetVideos;