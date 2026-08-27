import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "鬼々よろしく魁望蓮",
    short_name: "鬼々よろしく魁望蓮",
    description: "2027年、うらじゃ復活。岡山の子ども踊り連。",
    start_url: "/",
    display: "standalone",
    background_color: "#f3eee4",
    theme_color: "#c9251c",
    icons: [
      {
        src: "/images/logo.jpg",
        sizes: "160x160",
        type: "image/jpeg",
      },
    ],
  };
}
