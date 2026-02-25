const Notification = (props) => {
  const status = props.status;
  const getColor = (status) => {
    return status === 'error' ? 'red' : 'green';
  };
  const addedMessage = {
    color: getColor(status),
    background: 'lightgrey',
  };

  return <div style={addedMessage}>{props.message}</div>;
};

export default Notification;
