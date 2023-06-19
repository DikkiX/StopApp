import React from "react";
import SBChannelSettings from "@sendbird/uikit-react/ChannelSettings";

export const ChannelSettings = (props) => {
  const { channelUrl, onClose } = props;

  return (
    <div className="absolute flex right-0 z-50">
      <SBChannelSettings onCloseClick={onClose} channelUrl={channelUrl} />
    </div>
  );
};
