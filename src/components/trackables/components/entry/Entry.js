import { message } from 'antd';
import BooleanInput from './components/boolean-input/BooleanInput';
import QuantitativeInput from './components/quantitative-input/QuantitativeInput';
import { YesEntry, NoEntry } from './components/boolean-entry/BooleanEntry';
import { post } from '../../../../common/http';

const componentTypes = {
  boolean: {
    component: BooleanInput,
    renderValue: ({ booleanValue: value }) => (value ? <YesEntry /> : <NoEntry />),
  },
  quantitative: {
    component: QuantitativeInput,
    renderValue: ({ quantitativeValue: value, unit }) => (
      <span>
        {`${value} ${unit}`}
      </span>
    ),
  },
};

function Entry({
  trackable, date, entry, onSave, setDayEntries,
}) {
  const { component: Component, renderValue } = componentTypes[trackable.type];
  const addEntry = (value) => {
    const newEntry = { trackableId: trackable.id, date: date.toISOString().slice(0, 10), ...value };
    post('/entries', newEntry).then(() => {
      message.success('Entry added');
      onSave(date).then(setDayEntries);
    });
  };

  return (
    <div>
      {entry
        ? renderValue(entry)
        : <Component addEntry={addEntry} date={date} unit={trackable.unit} />}
    </div>
  );
}

export default Entry;
