import React, { useEffect, useState } from "react";
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

import bridge from "@vkontakte/vk-bridge";
const style = {
  width: "50vw",
  padding: "15px",
};

const Builder = (props) => {
  function add_value() {
    if (props.value >= 100) return;
    props.setCurrentValue(props.value + 10);
  }
  function pickFriend() {
    let result = {};
    bridge.send("VKWebAppGetFriends", { multi: false }).then((data) => {
      console.log(data);
      setCurrentValue(0);
    });
  }

  return (
    <Panel id={props.id}>
      <PanelHeader left={<PanelHeaderBack onClick={props.go} data-to="home" />}>
        Билдер пудинга
      </PanelHeader>
      <Group>
        <Div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Button mode="secondary" onClick={props.go} data-to="capacityPicker">
            Емкости
          </Button>
        </Div>

        <Div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardGrid>
            <ContentCard
              subtitle="Дозатор"
              image={hands}
              style={{ width: "50vw" }}
              onClick={add_value}
            />
          </CardGrid>

          <img
            src={hands}
            style={{
              maxWidth: "50vw",
              marginTop: "5vh",
            }}
          ></img>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "5vh",
            }}
          >
            <Text
              weight="medium"
              style={{
                marginBottom: 16,
                fontFamily: "sans-serif",
                fontSize: "14pt",
              }}
            >
              Заполнено на
            </Text>
            <Text
              weight="medium"
              style={{
                marginBottom: 16,
                fontFamily: "sans-serif",
                fontSize: "32pt",
              }}
            >
              {props.value} %
            </Text>
          </div>
        </Div>
        <Div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button size="l" onClick={pickFriend}>
            Скормить
          </Button>
        </Div>
        {/* <Text>{friend_data != null ? friend_data.id : '1'}</Text> */}
      </Group>
    </Panel>
  );
};

Builder.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  value: PropTypes.number,
  tool: PropTypes.number,
  setCurrentValue: PropTypes.func,
};

export default Builder;
