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
        onClick={(e: any) =>
          Number(e.target.dataset.id) < tabs.length &&
          setSelectedIndex(Number(e.target.dataset.id))
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
            data-id={index}
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
