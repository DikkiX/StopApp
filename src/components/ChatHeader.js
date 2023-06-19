import { useState } from "react";
import IconArrowLeft from "../icon-arrow-left.svg";
import InfoIcon from "../info-icon.svg";
import { useSendbirdStateContext } from "@sendbird/uikit-react";
import { ChannelSettings } from "./ChannelSettings";

const ChatHeader = ({ channel, onBack }) => {
  const globalStore = useSendbirdStateContext();
  const user = globalStore?.stores?.userStore?.user;
  const [renderChannelSettings, setRenderChannelSettings] = useState(false);

  return (
    <>
      <div className="custom-channel-header">
        <button onClick={onBack}>
          <img width={20} heigth={20} src={IconArrowLeft} alt="Back button" />
        </button>
        <span>{channel.name}</span>
        <span onClick={() => handleClick()}>
          <img width={20} heigth={20} src={InfoIcon} alt="Back button" />
        </span>
      </div>
      {renderChannelSettings && (
        <ChannelSettings
          onClose={() => setRenderChannelSettings(false)}
          channelUrl={channel.url}
        />
      )}
    </>
  );

  function handleClick() {
    setRenderChannelSettings(true);
  }
};

export default ChatHeader;
