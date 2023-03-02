export default function Title({ title, level }) {
  return <>
    {level === 'h1' && <h1>{title}</h1>}
    {level === 'h2' && <h2>{title}</h2>}
    {level === 'h3' && <h3>{title}</h3>}
  </>;
}
