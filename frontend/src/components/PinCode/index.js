import "./index.scss";
import Input from "../Input";
import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

export default function PinCode({
                                    value = "",
                                    setValue = () => {},
                                    refreshCom="",
                                    length=4
                               }) {

    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [RootId] = useState("pincode_"+uuidv4().toString());


    useEffect(()=>{
        setData(Array.from(new Array(4)));
    },[]);

    useEffect(()=>{
        setValue(data.join(''))
    },[refresh]);

    useEffect(()=>{
        if(value.length >= length){
            setData(value.substring(0,length));
        }
    },[value]);

    useEffect(()=>{
        setData(Array.from(new Array(4)));
    },[refreshCom]);

    return (
        <div className='PinCode' id={RootId}>
            <div>
            {
                data.map((item,index) => (
                    <div className='d-inline-flex me-2'  key={index}>
                        <div style={{width:'50px'}} className='text-center pin-input-container'
                             seq={`seq${index}`}>
                            <Input
                                value={data[index]}
                                setValue={(e)=> {

                                    const lastChar = e.slice(-1)
                                    data[index] = lastChar
                                    setRefresh(Math.random())
                                    if(index < data.length-1)
                                        document.getElementById(RootId).querySelector(`[seq=seq${index+1}]`)
                                                .getElementsByTagName('input')[0].focus()
                                }}
                            />
                        </div>

                    </div>

                ))
            }

           </div>

        </div>
    );
}
