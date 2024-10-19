import { useEffect, useState } from "react";
import { supabase } from "../helpers/supabaseClient"
import Item from "./Item";

interface RankingItem{
    name:string;
    score: number;
}


function Ranking() {

    const [ranking, setRanking] = useState<RankingItem[]> ([])

    const callSupabase = async()=>{
        const {data} = await supabase
        .from('ranking')
        .select('*')
        .order('score',{ascending:false})
        /* console.log(data); */
        if(data){
            setRanking(data);
        }
    }

    useEffect(()=>{
        callSupabase()
    },[])

  return (
    <div className="content">
      {
        ranking &&
        ranking.map((item, index) => (
            <Item 
                key={index}
                name={item.name}
                score={item.score}
                index={index}
            />
        ))
      }
    </div>
  )
}

export default Ranking
