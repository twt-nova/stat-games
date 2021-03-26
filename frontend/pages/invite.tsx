import { useEffect } from "react";

export default function Invite() {
  useEffect(() => {
    window.location.href =
      "https://discord.com/oauth2/authorize?client_id=820356965959860226&permissions=388200%20F&scope=bot";
  });
  return <></>;
}
