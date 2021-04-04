import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import View from "@vkontakte/vkui/dist/components/View/View";
import ScreenSpinner from "@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner";
import { AdaptivityProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Persik from "./panels/Persik";
import Builder from "./panels/Builder";
import CapacityPicker from "./panels/CapacityPicker";
import FriendPicker from "./panels/FriendPicker";

const App = () => {
  const [activePanel, setActivePanel] = useState("builder");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);
  const [currentTool, setCurrentTool] = useState(1);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
	  console.log(currentValue);
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <AdaptivityProvider>
      <AppRoot>
        <View activePanel={activePanel} popout={popout}>
          <Builder
            id="builder"
            go={go}
            value={currentValue}
            tool={currentTool}
			setCurrentValue={setCurrentValue}
          />
          <Home id="home" fetchedUser={fetchedUser} go={go} />
          <Persik id="persik" go={go} />
          <CapacityPicker id="capacityPicker" go={go} />
          <FriendPicker id="friendPicker" go={go} />
        </View>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
