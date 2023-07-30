import {axios} from "../boot";
import {toast} from "./index";

export const downloadFileDirectly = (fileId , fileName) => {

    const url = "/v1/file-management/DownloadDirectlyAsync";
    const body = {
        file_Id: fileId,
    };
    const options = {
        responseType: "blob",
    };
    axios.post(url, body, options).then((res) => {
        const fileNameSplit = fileName.split(".");
        const fileType = fileNameSplit[fileNameSplit.length - 1];
        const blob = new Blob([res.data]);
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
            "download",
            fileName
        );
        link.click();
    });
}
