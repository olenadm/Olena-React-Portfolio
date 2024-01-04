export default function SubItem(props: any) {
  const { item} = props;  

  return (
    <ul>
      {item.map((i: any, index:number) => {
       return(<li key={index}> {i.text}</li>); 
      })}
    </ul>
  );
}
