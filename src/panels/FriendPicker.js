import React from "react";
import PropTypes from "prop-types";

import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import PanelHeaderBack from "@vkontakte/vkui/dist/components/PanelHeaderBack/PanelHeaderBack";
import Group from "@vkontakte/vkui/dist/components/Group/Group";
import Div from "@vkontakte/vkui/dist/components/Div/Div";
import Progress from "@vkontakte/vkui/dist/components/Progress/Progress";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import Card from "@vkontakte/vkui/dist/components/Card/Card";
import CardGrid from "@vkontakte/vkui/dist/components/CardGrid/CardGrid";
import ContentCard from "@vkontakte/vkui/dist/components/ContentCard/ContentCard";
import Text from "@vkontakte/vkui/dist/components/Typography/Text/Text";

import hands from "../img/hands.jpg";
import bridge from '@vkontakte/vk-bridge';

const style = {
  width: "50vw",
  padding: "15px",
};

function getFriends() {
  bridge.send("VKWebAppGetFriends", {multi: false})
  .then(data=>{
    console.log(data);
  });
  return ["friend1", "friend2"];
}

const FriendPicker = (props) => (
  <Panel id={props.id}>
    <PanelHeader
      left={<PanelHeaderBack onClick={props.go} data-to="builder" />}
    >
      Выберите друга
    </PanelHeader>
    <Group>
      {getFriends().map((friend) => (
        <Text>{friend}</Text>
      ))}
    </Group>
  </Panel>
);

FriendPicker.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default FriendPicker;
