import Card from "../components/Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {handleClick: {action: "handleClick"}},
};

const Template = (args) => <Card {...args}></Card>;

export const CardFirst = Template.bind({});
CardFirst.args = {};
