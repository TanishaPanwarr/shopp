import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import Api from "./component/api1";

const App=()=>{

            return(
                <>
                    <h1>App Component is running</h1>
                    <Api/>
        </>
    )
}
export default App;