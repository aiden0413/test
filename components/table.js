export default function Table(){
    const css="border-t-2 border-b-2 border-r-2 border-black p-1";

    const heads=['','木','木','木','木'];

    const data=[
    [['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)']],
    [['傷官','(상관)'],['임','官','傷官'],['임','官','傷官'],['임','官','傷官'],['임','官','傷官']],
    [['傷官','(상관)'],['임','官','傷官'],['임','官','傷官'],['임','官','傷官'],['임','官','傷官']],
    [['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)']],
    [['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)']],
    [['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)']],
    [['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)'],['傷官','(상관)','傷官','(상관)','傷官','(상관)']],
    ];

    const color1=['black','red-500','black','black','cyan-500','red-500','black','white'];
    const color2=['white','white','white','white','white','white','white','black'];
    let index=0;

    return (
        <div className="p-4 bg-white">
        <div className="relative p-4 border-3 border-black">
            <div className="text-center">
                <div className="my-3 text-[clamp(1px,3vw,15px)] text-black">김로켓님의 사주<br/></div>
                <div className="my-3 text-[clamp(1px,4vw,20px)] text-black">1980년 8월27일 08:10</div>
            </div>
            <table className="text-center table-auto text-black w-full">
                <thead>
                    <tr>
                        {heads.map((head)=>(
                            <th className="border-r-2 border-black">{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row)=>(
                        <tr>
                            {row.map((value)=>{
                                if(value.length==3){
                                    return (
                                        <td className={css}>
                                            <div className={`bg-${color1[index]} rounded-2xl p-2 text-${color2[index]}
                                                ${color1[index++]==='white' ? 'border border-black' : ''}
                                            `}>
                                                {value.map((text,i)=>{
                                                    if(i===1){
                                                        return <div className="text-[clamp(1px,6vw,20px)]">{text}</div>
                                                    }
                                                    else{
                                                        return <div className="text-[clamp(1px,3vw,8px)]">{text}</div>
                                                    }
                                                })}
                                            </div>
                                        </td>
                                    )
                                }
                                else{
                                    return (
                                        <td className={css}>
                                            {value.map((text,i)=>{
                                                if(i%2===0){
                                                    return <div className="text-[clamp(1px,4vw,15px)]">{text}</div>
                                                }
                                                else{
                                                    return <div className="text-[clamp(1px,3vw,10px)]">{text}</div>
                                                }
                                            })}
                                        </td>
                                        
                                    )
                                }
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
      </div>
      </div>
    );
}