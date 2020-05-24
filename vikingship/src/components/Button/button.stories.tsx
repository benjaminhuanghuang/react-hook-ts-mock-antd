import React from "react";
import { storiesof } from "@storybook/react";
import { action } from "@storybook/addon-links";
//
import Button from "./button";

const defaultButton = () => <Button onClick={action("clicked")}>default button</Button>;

const buttonWithSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">small button</Button>
  </>
);

const buttonWithType = () => (
  <>
    <Button btnType="primary">primary button</Button>
    <Button btnType="danger">danger button</Button>
    <Button btnType="link" href="https://google.com">
      link button
    </Button>
  </>
);

storiesof("Button Component", module)
  .add("Default Button", defaultButton)
  .add("Button With Size", buttonWithSize)
  .add("Button With type", buttonWithType);
