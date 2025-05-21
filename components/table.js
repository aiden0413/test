export default function Table(){
    const css="border-t-[clamp(0.1px,0.5vw,2px)] border-b-[clamp(0.1px,0.5vw,2px)] border-r-[clamp(0.1px,0.5vw,2px)] border-black p-[clamp(0.1px,0.5vw,2px)]";

    const heads=['','木1','木2','木3','木4'];

    const data=[
    [['傷官','(상관1)'],['傷官','(상관2)'],['傷官','(상관3)'],['傷官','(상관4)'],['傷官','(상관5)']],
    [['傷官','(상관1)'],['임','官','傷官'],['임','官','傷官'],['임','官','傷官'],['임','官','傷官']],
    [['傷官','(상관1)'],['임','官','傷官'],['임','官','傷官'],['임','官','傷官'],['임','官','傷官']],
    [['傷官','(상관1)'],['傷官','(상관2)'],['傷官','(상관3)'],['傷官','(상관4)'],['傷官','(상관5)']],
    [['傷官','(상관1)'],['傷官','(상관2)'],['傷官','(상관3)'],['傷官','(상관4)'],['傷官','(상관5)']],
    [['傷官','(상관1)'],['傷官','(상관2)'],['傷官','(상관3)'],['傷官','(상관4)'],['傷官','(상관5)']],
    [['傷官','(상관1)'],['傷官','(상관2)'],['傷官','(상관3)'],['傷官','(상관4)'],['傷官','(상관5)','傷官','(상관6)','傷官','(상관7)']],
    ];

    const color1=['bg-black','bg-red-500','bg-black','bg-black','bg-cyan-500','bg-red-500','bg-black','bg-white'];
    const color2=['text-white','text-white','text-white','text-white','text-white','text-white','text-white','text-black'];
    let index=0;

    return (
        <div className="w-full max-w-md p-[clamp(1px,4vw,4px)] bg-white">
        <div className="relative p-[clamp(1px,4vw,4px)] border-[clamp(1px,4vw,4px)] border-black">
            <div className="text-center">
                <div className="my-3 text-[clamp(1px,3vw,15px)] text-black">김로켓님의 사주<br/></div>
                <div className="my-3 text-[clamp(1px,4vw,20px)] text-black">1980년 8월27일 08:10</div>
            </div>
            <table className="text-center table-fixed text-black w-full h-full border-collapse">
                <thead>
                    <tr>
                        {heads.map((head,i)=>(
                            <th key={i} className="border-r-[clamp(0.1px,0.5vw,2px)] border-black text-[clamp(1px,6vw,20px)]">{head}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row,idx1)=>(
                        <tr key={`${idx1}`}>
                            {row.map((value,idx2)=>{
                                if(value.length==3){
                                    const bgColor=color1[index];
                                    const textColor=color2[index];
                                    const borderColor= color1[index]==='bg-white' ? 'border-[clamp(0.1px,0.5vw,1px)] border-black' : '';
                                    index++;
                                    return (
                                        <td key={`${idx1}-${idx2}`} className={css}>
                                            <div className={`aspect-square flex items-center justify-center ${bgColor} rounded-[clamp(0.1px,4vw,20px)] p-[clamp(0.1px,2vw,4px)] ${textColor} ${borderColor} `}>
                                                <div>
                                                {value.map((text,idx3)=>{
                                                    if(idx3===1){
                                                        return <div key={`${idx1}-${idx2}-${idx3}`} className="text-[clamp(1px,5vw,20px)]">{text}</div>
                                                    }
                                                    else{
                                                        return <div key={`${idx1}-${idx2}-${idx3}`} className="text-[clamp(1px,2vw,8px)]">{text}</div>
                                                    }
                                                })}
                                                </div>
                                            </div>
                                        </td>
                                    )
                                }
                                else{
                                    return (
                                        <td key={`${idx1}-${idx2}`} className={css}>
                                            {value.map((text,idx3)=>{
                                                if(idx3%2===0){
                                                    return <div key={`${idx1}-${idx2}-${idx3}`} className="text-[clamp(1px,4vw,15px)]">{text}</div>
                                                }
                                                else{
                                                    return <div key={`${idx1}-${idx2}-${idx3}`} className="text-[clamp(1px,3vw,10px)]">{text}</div>
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