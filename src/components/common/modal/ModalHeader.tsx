const ModalHeader = (props: { name: string }) => {
  return (
    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t no-click">
      <h3 className="text-3xl font-semibold no-click">{props.name}</h3>
    </div>
  );
};

export default ModalHeader;
