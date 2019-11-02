import React from 'react';
import Person from './file2';
import {males} from "./file2";
import {females} from "./file2";

const {firstName, email} = Person; 

export default function App2() {
    return (
        <div>
            <p>Hello</p>
            <p>Hej</p>
            <p>{email}</p>
            <p>{firstName}</p>
            <p>{console.log(...males, ...females)}</p>
            <p>{console.log(...males, firstName, "Helle",...females, "Tina")}</p>
        </div>
    )
}