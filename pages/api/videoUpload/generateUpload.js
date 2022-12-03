import fs from "fs";

export default async function handler(req, res) {
    //first part to generate the upload url
    const response = await fetch(
        "https://livepeer.studio/api/asset/request-upload", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_STUDIO_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: "james",
            }),
        }
    );
    const uploadData = await response.json();
    if (!uploadData) {
        res.status(500).json({ error: "No upload data" });
    }

    //second part
    const uploadUrl = uploadData.url;
    const assetId = uploadData.asset.id;
    const path = req.body.filePath;

    const upload = await fetch(uploadUrl, {
        method: "PUT",
        body: fs.createReadStream(path),
    });
    res.status(200).json(uploadData);
}