const DEFAULT_COLOR = `#4CAF50`;

const LIST_FILTER_ALL = `LIST_FILTER_ALL`;
const LIST_FILTER_PRIORITY = `LIST_FILTER_PRIORITY`;
const LIST_FILTER_NON_PRIORITY = `LIST_FILTER_NON_PRIORITY`;

const LIST_FILTER = [
  {
    key: LIST_FILTER_ALL,
    title: `All`,
  },
  {
    key: LIST_FILTER_PRIORITY,
    title: `Priority`,
  },
  {
    key: LIST_FILTER_NON_PRIORITY,
    title: `Non-Priority`,
  },
];

export {
  DEFAULT_COLOR,
  LIST_FILTER,
  LIST_FILTER_ALL,
  LIST_FILTER_PRIORITY,
  LIST_FILTER_NON_PRIORITY,
};