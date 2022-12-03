import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";

import UploadVideoWidget from "../components/UploadVideoWidget";

export default function UploadVideo() {
  const livepeerClient = createReactClient({
    provider: studioProvider({
      apiKey: process.env.NEXT_PUBLIC_STUDIO_API_KEY,
    }),
  });
  const apiKey = process.env.NEXT_PUBLIC_STUDIO_API_KEY;
  return <UploadVideoWidget />;
}
