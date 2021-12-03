import React, { PropsWithChildren, useState } from "react";
import { ButtonSizes, ButtonVariants } from "components/generics/Button/constants";
import { TabsProps } from "./constants";
import { Button } from "components/generics/Button/parts";
import * as P from "./parts";

const Tabs = ({ children, tabTitles }: PropsWithChildren<TabsProps>): JSX.Element => {
  const [indexOfVisibleTab, setIndexOfVisibleTab] = useState<null | number>(null);

  const handleTabVisibility = (index: number) => () => {
    if (indexOfVisibleTab === index) setIndexOfVisibleTab(null);
    else setIndexOfVisibleTab(index);
  };

  return (
    <P.Wrapper>
      {React.Children.map(children, (item, index) => {
        const tabWidth = 100 / React.Children.count(children);
        const isTabVisible = index === indexOfVisibleTab;
        const tabTitle = tabTitles[index];

        return (
          <P.Tab isVisible={isTabVisible}>
            <P.TabHeader index={index} onClick={handleTabVisibility(index)} width={tabWidth} isVisible={isTabVisible}>
              {tabTitle}
              {isTabVisible && (
                <Button size={ButtonSizes.LARGE} variant={ButtonVariants.PRIMARY} onClick={handleTabVisibility(index)}>
                  Close X
                </Button>
              )}
            </P.TabHeader>
            <P.TabBody>{item}</P.TabBody>
          </P.Tab>
        );
      })}
    </P.Wrapper>
  );
};

export default Tabs;
