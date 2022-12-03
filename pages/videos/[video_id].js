import { useRouter } from "next/router";

export const VideoPage = () => {
  const router = useRouter();
  const { video_id } = router.query;
  return <h1>Video Page: {video_id} </h1>;
};
