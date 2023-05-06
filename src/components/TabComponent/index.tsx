import { useState } from "react";
import { css } from "@emotion/react";
import { TabComponentPropTypes } from "./types";

const TabComponent = ({ tabs, extraStyles }: TabComponentPropTypes) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div css={(theme) => extraStyles?.tabComponentContainer(theme) || css``}>
      <ul
        css={(theme) =>
          extraStyles?.tabComponentHeadingContainer(theme) || css``
        }
      >
        {tabs.map((tab, index) => (
          <li
            css={(theme) => [
              selectedIndex === index
                ? extraStyles?.tabHeadingElementActive(theme)
                : css``,
              extraStyles?.tabHeadingElementContainer(theme) || css``,
            ]}
            key={index}
            onClick={() =>
              setSelectedIndex(index)
            }
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div
        css={(theme) => extraStyles?.tabComponentBodyContainer(theme) || css``}
      >
        {tabs[selectedIndex]?.body}
      </div>
    </div>
  );
};

export default TabComponent;
