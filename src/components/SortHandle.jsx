import { useState } from "react"
import SortBy from "./SortBy";
import SortControl from "./SortControl";

export default function SortHandle () {
   const [searchTerm, setSearchTerm] = useState("reviews");
return (

    <div>
        <SortBy setSearchTerm={setSearchTerm}/>
        <SortControl searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </div>
    
    )}