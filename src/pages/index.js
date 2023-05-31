import {SendBirdProvider, ChannelList, Channel} from "@sendbird/uikit-react";
import "../styles.css";
import "@sendbird/uikit-react/dist/index.css";
import ChatHeader from "../components/ChatHeader";
import ChannelPreview from "../components/ChannelPreview";
import React, {useState} from "react";
import {useParams} from "react-router-dom";


const IndexPage = () => {
    const {id} = useParams();
    console.log({id}.id);

    const [channel, setChannel] = useState(null);
    const onChannelSelect = (_channel) => {
        setChannel(_channel);
    };

    const onBack = () => {
        setChannel(null);
    };



if ({id}.id !== undefined){
    return(
        <div className="App">
            <SendBirdProvider
                userId={id}
                appId="3CF98946-47C4-4ACD-8B9F-66D6B7237291"
            >
                {channel ? (
                    <Channel
                        channelUrl={channel.url}
                        renderChannelHeader={(props) => {
                            return <ChatHeader channel={channel} onBack={onBack} />

                        }}
                        renderChatHeader={({ channel, user }) => (
                            <ChatHeader channel={channel} user={user} onBack={onBack} />
                        )}

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
    )

}else {
    return (
        <div>
            <h1>
                Je bent momenteel niet ingelogd, log opnieuw in in de applicatie.
            </h1>
        </div>
    )
}

}

export default IndexPage;