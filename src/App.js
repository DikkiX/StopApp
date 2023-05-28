import "./styles.css";
import { SendBirdProvider, ChannelList, Channel } from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChannelPreview from "./components/ChannelPreview";

export default function App() {
  const [channel, setChannel] = useState(null);

  const onChannelSelect = (_channel) => {
    setChannel(_channel);
  };

  const onBack = () => {
    setChannel(null);
  };

  return (
    <div className="App">
      <SendBirdProvider
        userId="user2"
        appId="3CF98946-47C4-4ACD-8B9F-66D6B7237291"
      >
        {channel ? (
          <Channel
            channelUrl={channel.url}
            renderChatHeader={({ channel, user }) => (
              <ChatHeader channel={channel} user={user} onBack={onBack} />
            )}
            renderChatItem={(props) => null}
            renderMessageInput={(props) => null}
          />
        ) : (
          <ChannelList
            renderChannelPreview={({ channel }) => (
              <ChannelPreview
                channel={channel}
                onChannelSelect={onChannelSelect}
              />
            )}
          />
        )}
      </SendBirdProvider>
    </div>
  );
}
