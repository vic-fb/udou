import { message } from 'antd';
import BooleanInput from './components/BooleanInput';
import QuantitativeInput from './components/QuantitativeInput/QuantitativeInput';
import { YesEntry, NoEntry } from './components/BooleanEntry';

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

export default function Entry({
  trackable, date, entry, onSave, setDayEntries,
}) {
  const { component: Component, renderValue } = componentTypes[trackable.type];
  const addEntry = (value) => {
    const newEntry = { trackableId: trackable.id, date: date.toISOString().slice(0, 10), ...value };
    fetch(`${process.env.REACT_APP_API_URL || 'http://localhost:5000'}/entries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    })
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not OK');
        onSave(date).then(setDayEntries);
        return message.success('Entry added');
      })
      .catch(() => message.error('An error happened'), []);
  };

  return (
    <div>
      {entry
        ? renderValue(entry)
        : <Component addEntry={addEntry} date={date} unit={trackable.unit} />}
    </div>
  );
}
