import { SelectStyle } from '../../assets/css/select/style';

export default function Select({
  arrayOptions,
  onChange,
  selectedValue,
  defaultOption,
}) {
  return (
    <SelectStyle value={selectedValue} onChange={onChange}>
      <option value={''} disabled={true} className="firstOption">
        {defaultOption}
      </option>

      {arrayOptions.map(({ id, nome }) => {
        return (
          <option key={id} value={id}>
            {nome}
          </option>
        );
      })}
    </SelectStyle>
  );
}
