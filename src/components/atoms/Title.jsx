export default function Title({ title, level }) {
  return <>
    {level === 'h1' && <h1>{title}</h1>}
    {level === 'h2' && <h2>{title}</h2>}
    {level === 'h3' && <h3>{title}</h3>}
    {level === 'h4' && <h4>{title}</h4>}
    {level === 'h5' && <h5>{title}</h5>}
    {level === 'h6' && <h6>{title}</h6>}
  </>;
}
