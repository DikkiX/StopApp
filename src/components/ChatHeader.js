import IconArrowLeft from "../icon-arrow-left.svg";
import { useSendbirdStateContext } from "@sendbird/uikit-react";

const ChatHeader = ({ channel, onBack }) => {
  const globalStore = useSendbirdStateContext();
  const user = globalStore?.stores?.userStore?.user;


  return (<div className="custom-channel-header">
    <button onClick={onBack}>
      <img width={20} heigth={20} src={IconArrowLeft} alt="Back button" />
    </button>
    <span>{channel.name}</span>
    <span>{user.nickname}</span>
  </div>)
};

export default ChatHeader;