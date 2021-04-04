import React, { useState, useEffect } from "react";
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

import hands_image from "../img/hands.jpg";

const CapacityPicker = (props) => {
  const toolNames = [
    "Ладошки",
    "Совок",
    "Кружка",
    "Тарелка",
    "Лопата",
    "Ведро",
    "Бочка",
    "Бассейн",
    "Камаз",
  ];

  const tools = toolNames.map((toolName) => (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }
    }
    >
      <img
        src={hands_image}
        style={{
          width: "25vw",
          height: "25vw",
        }}
      ></img>
      <Div>{toolName}</Div>
    </Card>
  ));
  console.log(tools);

  return (
    <Panel id={props.id}>
      <PanelHeader
        left={<PanelHeaderBack onClick={props.go} data-to="builder" />}
      >
        Выбор емкости
      </PanelHeader>
      <Group>
        <CardGrid size="s">{tools}</CardGrid>
      </Group>
    </Panel>
  );
};

CapacityPicker.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default CapacityPicker;
