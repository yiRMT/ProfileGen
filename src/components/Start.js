import React, { useState } from 'react';
import { Suspense } from "react";
import { db } from "../firebase/firebase";
import { askGPT } from "../chatGPT/askGPT";
import {
    collection,
    doc,
    updateDoc,
    getDoc,
} from "firebase/firestore";
import {Box,TextField, Button, FormControlLabel, FormGroup, Checkbox, FormLabel } from '@mui/material'
import '../style/start.css';

const Start = () => {
    const [apiKey, setAPIKey] = useState("");
    const [content, setContent] = useState("");
    const [charnum, setCharnum] = useState("");
    const [question, setQuestion] = useState("");
    const [chk, setChk] = useState({
        c1:false,
        c2:false,
    })
    const [result, setResult] = useState("test");
    
    async function sendData() {  
        console.log(content)
        console.log(charnum)
        console.log(question)
        console.log(chk)
        if (apiKey !== '') {
            const gpt_response = await askGPT(apiKey, "元気？", charnum, question, chk)
            setResult(gpt_response)
        }
    }

    const hndlChk1 = (event) => {
        // checkBoxのバリューは event.target.checked で取得できる

        // ポイント１の箇所
        // setChk(別のステートの値を参照して更新したい値); という書き方をすると、更新タイミングが非同期のためうまくいかない
        // useStateは、更新値に関数を与えることができる
        setChk(prev => {
            // 関数のパラメータ（prev） に、前のステートを持っている。その値を使って、更新する新しい値を定義し、returnでstateに返す
            console.log("PREV>")
            console.log(prev);
            console.log("<PREV")
            console.log(prev);
            
            // ポイント２の箇所
            // useStateはクラスでのstateと異なり、マージされない。そのため、以下のように、stateに持たせる全ての属性を与える必要がある
            // 更新したい属性だけをsetStateで与えると、与えたもの意外消える
            let data = {
                chk1: event.target.checked,
                chk2:prev.chk2,
            }
            return data
        });
    }

    // 以下 hndlChk1と同じことをそれぞれのチェックボックスで実施
    const hndlChk2 = (event) => {
        setChk(prev => {
        console.log("PREV>")
        console.log(prev);
        console.log("<PREV")
        console.log(prev);
        let data = {
            chk1:prev.chk1,
            chk2:event.target.checked,
        }
        return data
        });
    }

    return (
        <>
            <TextField
                id="filled-multiline-static"
                label="OpenAI API Key"
                placeholder="Your OpenAI API Key"
                value={apiKey}
                onChange={(e) => {
                    setAPIKey(e.target.value)
                }} />
            <p/>
            <TextField
                id="filled-multiline-static"
                label="質問"
                multiline
                rows={4}
                placeholder='質問を入力してください'
                value={question}
                onChange={(e) => {
                    setQuestion(e.target.value)
                }} />
            <p/>
            <TextField
                id="filled-multiline-static"
                label="内容"
                multiline
                rows={10}
                placeholder='内容を箇条書きで入力してください'
                value={content}
                onChange={(e) => {
                    setContent(e.target.value)
                }} />
            <p/>
            <TextField id="input-with-sx" label="文字数" variant="standard" type="number"
                onChange={(e) => {
                    setCharnum(e.target.value)
                }} />
            <p>{charnum}</p>
            <FormGroup>
                <FormControlLabel control={<Checkbox onChange={hndlChk1}/>} label="添削" />
                <FormControlLabel control={<Checkbox onChange={hndlChk2}/>} label="内容生成" />
            </FormGroup>
            <Box>
            現在のcheckBoxステートの内容 <br></br>
            {JSON.stringify(chk)}
            </Box>
            <Button variant="contained" width="full" onClick={sendData} >送信</Button>
            <h2>結果</h2>
            <Suspense fallback={<div>...Loading</div>}>
                <p>{ result }</p>
            </Suspense>
        </>
    );
};



export default Start;