﻿/*
Copyright 2022 Comcast Cable Communications Management, LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
"use strict";(self.webpackChunka_porrtal_io_app=self.webpackChunka_porrtal_io_app||[]).push([[3751],{6879:(nt,M,O)=>{O.d(M,{Z:()=>bt});const E=[["(",")"],[")","("],["<",">"],[">","<"],["[","]"],["]","["],["{","}"],["}","{"],["\xab","\xbb"],["\xbb","\xab"],["\u2039","\u203a"],["\u203a","\u2039"],["\u207d","\u207e"],["\u207e","\u207d"],["\u208d","\u208e"],["\u208e","\u208d"],["\u2264","\u2265"],["\u2265","\u2264"],["\u2329","\u232a"],["\u232a","\u2329"],["\ufe59","\ufe5a"],["\ufe5a","\ufe59"],["\ufe5b","\ufe5c"],["\ufe5c","\ufe5b"],["\ufe5d","\ufe5e"],["\ufe5e","\ufe5d"],["\ufe64","\ufe65"],["\ufe65","\ufe64"]],U=["\u0622","\u0623","\u0625","\u0627"],w=["\ufef5","\ufef7","\ufef9","\ufefb"],j=["\ufef6","\ufef8","\ufefa","\ufefc"],N=["\u0627","\u0628","\u062a","\u062b","\u062c","\u062d","\u062e","\u062f","\u0630","\u0631","\u0632","\u0633","\u0634","\u0635","\u0636","\u0637","\u0638","\u0639","\u063a","\u0641","\u0642","\u0643","\u0644","\u0645","\u0646","\u0647","\u0648","\u064a","\u0625","\u0623","\u0622","\u0629","\u0649","\u0644","\u0645","\u0646","\u0647","\u0648","\u064a","\u0625","\u0623","\u0622","\u0629","\u0649","\u06cc","\u0626","\u0624"],Y=["\ufe8d","\ufe8f","\ufe95","\ufe99","\ufe9d","\ufea1","\ufea5","\ufea9","\ufeab","\ufead","\ufeaf","\ufeb1","\ufeb5","\ufeb9","\ufebd","\ufec1","\ufec5","\ufec9","\ufecd","\ufed1","\ufed5","\ufed9","\ufedd","\ufee1","\ufee5","\ufee9","\ufeed","\ufef1","\ufe87","\ufe83","\ufe81","\ufe93","\ufeef","\ufbfc","\ufe89","\ufe85","\ufe70","\ufe72","\ufe74","\ufe76","\ufe78","\ufe7a","\ufe7c","\ufe7e","\ufe80","\ufe89","\ufe85"],q=["\ufe8e","\ufe90","\ufe96","\ufe9a","\ufe9e","\ufea2","\ufea6","\ufeaa","\ufeac","\ufeae","\ufeb0","\ufeb2","\ufeb6","\ufeba","\ufebe","\ufec2","\ufec6","\ufeca","\ufece","\ufed2","\ufed6","\ufeda","\ufede","\ufee2","\ufee6","\ufeea","\ufeee","\ufef2","\ufe88","\ufe84","\ufe82","\ufe94","\ufef0","\ufbfd","\ufe8a","\ufe86","\ufe70","\ufe72","\ufe74","\ufe76","\ufe78","\ufe7a","\ufe7c","\ufe7e","\ufe80","\ufe8a","\ufe86"],Q=["\ufe8e","\ufe92","\ufe98","\ufe9c","\ufea0","\ufea4","\ufea8","\ufeaa","\ufeac","\ufeae","\ufeb0","\ufeb4","\ufeb8","\ufebc","\ufec0","\ufec4","\ufec8","\ufecc","\ufed0","\ufed4","\ufed8","\ufedc","\ufee0","\ufee4","\ufee8","\ufeec","\ufeee","\ufef4","\ufe88","\ufe84","\ufe82","\ufe94","\ufef0","\ufbff","\ufe8c","\ufe86","\ufe71","\ufe72","\ufe74","\ufe77","\ufe79","\ufe7b","\ufe7d","\ufe7f","\ufe80","\ufe8c","\ufe86"],X=["\ufe8d","\ufe91","\ufe97","\ufe9b","\ufe9f","\ufea3","\ufea7","\ufea9","\ufeab","\ufead","\ufeaf","\ufeb3","\ufeb7","\ufebb","\ufebf","\ufec3","\ufec7","\ufecb","\ufecf","\ufed3","\ufed7","\ufedb","\ufedf","\ufee3","\ufee7","\ufeeb","\ufeed","\ufef3","\ufe87","\ufe83","\ufe81","\ufe93","\ufeef","\ufbfe","\ufe8b","\ufe85","\ufe70","\ufe72","\ufe74","\ufe76","\ufe78","\ufe7a","\ufe7c","\ufe7e","\ufe80","\ufe8b","\ufe85"],$=["\u0621","\u0622","\u0623","\u0624","\u0625","\u0627","\u0629","\u062f","\u0630","\u0631","\u0632","\u0648","\u0649"],G=["\u064b","\u064b","\u064c","\u061f","\u064d","\u061f","\u064e","\u064e","\u064f","\u064f","\u0650","\u0650","\u0651","\u0651","\u0652","\u0652","\u0621","\u0622","\u0622","\u0623","\u0623","\u0624","\u0624","\u0625","\u0625","\u0626","\u0626","\u0626","\u0626","\u0627","\u0627","\u0628","\u0628","\u0628","\u0628","\u0629","\u0629","\u062a","\u062a","\u062a","\u062a","\u062b","\u062b","\u062b","\u062b","\u062c","\u062c","\u062c","\u062c","\u062d","\u062d","\u062d","\u062d","\u062e","\u062e","\u062e","\u062e","\u062f","\u062f","\u0630","\u0630","\u0631","\u0631","\u0632","\u0632","\u0633","\u0633","\u0633","\u0633","\u0634","\u0634","\u0634","\u0634","\u0635","\u0635","\u0635","\u0635","\u0636","\u0636","\u0636","\u0636","\u0637","\u0637","\u0637","\u0637","\u0638","\u0638","\u0638","\u0638","\u0639","\u0639","\u0639","\u0639","\u063a","\u063a","\u063a","\u063a","\u0641","\u0641","\u0641","\u0641","\u0642","\u0642","\u0642","\u0642","\u0643","\u0643","\u0643","\u0643","\u0644","\u0644","\u0644","\u0644","\u0645","\u0645","\u0645","\u0645","\u0646","\u0646","\u0646","\u0646","\u0647","\u0647","\u0647","\u0647","\u0648","\u0648","\u0649","\u0649","\u064a","\u064a","\u064a","\u064a","\ufef5","\ufef6","\ufef7","\ufef8","\ufef9","\ufefa","\ufefb","\ufefc","\u061f","\u061f","\u061f"],I=["\u0621","\u0641"],H=["\u063a","\u064a"],et=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],K=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],R=10,T=11,n=12,h=18,dt=["UBAT_L","UBAT_R","UBAT_EN","UBAT_AN","UBAT_ON","UBAT_B","UBAT_S","UBAT_AL","UBAT_WS","UBAT_CS","UBAT_ES","UBAT_ET","UBAT_NSM","UBAT_LRE","UBAT_RLE","UBAT_PDF","UBAT_LRO","UBAT_RLO","UBAT_BN"],Lt=[100,0,0,0,0,101,102,103,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,104,4,4,4,0,4,0,4,0,4,4,4,0,0,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,4,4,0,0,4,4,0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,105,7,7,106,107],Bt=[[h,h,h,h,h,h,h,h,h,6,5,6,8,5,h,h,h,h,h,h,h,h,h,h,h,h,h,h,5,5,5,6,8,4,4,T,T,T,4,4,4,4,4,R,9,R,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,h,h,h,h,h,h,5,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,9,4,T,T,T,T,4,4,4,4,0,4,4,h,4,4,T,T,2,2,4,0,4,4,4,2,0,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,4,4,4,4,4,4,4,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,1,n,1,n,n,1,n,n,1,n,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4],[3,3,3,3,4,4,4,4,7,T,T,7,9,7,4,4,n,n,n,n,n,n,n,n,n,n,n,7,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,3,3,3,3,3,3,3,3,3,3,T,3,3,7,7,7,n,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,n,n,n,n,n,n,n,3,4,n,n,n,n,n,n,7,7,n,n,4,n,n,n,n,7,7,2,2,2,2,2,2,2,2,2,2,7,7,7,7,7,7],[7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,7,7,n,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,n,n,n,n,n,n,n,n,n,n,n,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,n,n,n,n,n,n,n,n,n,1,1,4,4,4,4,1,4,4,4,4,4],[8,8,8,8,8,8,8,8,8,8,8,h,h,h,0,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,5,13,14,15,16,17,9,T,T,T,T,T,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,8,h,h,h,h,h,4,4,4,4,4,h,h,h,h,h,h,2,0,4,4,2,2,2,2,2,2,R,R,4,4,4,0,2,2,2,2,2,2,2,2,2,2,R,R,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,T,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],[0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,1,n,1,1,1,1,1,1,1,1,1,1,R,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,4,1,4,1,1,4,1,1,4,1,1,1,1,1,1,1,1,1,1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7],[n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,n,n,n,n,n,n,n,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,4,9,4,4,9,4,4,4,4,4,4,4,4,4,T,4,4,R,R,4,4,4,4,4,T,T,4,4,4,4,4,7,7,7,7,7,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4,4,h],[4,4,4,T,T,T,4,4,4,4,4,R,9,R,9,9,2,2,2,2,2,2,2,2,2,2,9,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,0,0,0,4,4,0,0,0,4,4,4,T,T,4,4,4,T,T,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4]];class bt{constructor(){this.inputFormat="ILYNN",this.outputFormat="VLNNN",this.sourceToTarget=[],this.targetToSource=[],this.levels=[]}bidiTransform(e,a,o){if(this.sourceToTarget=[],this.targetToSource=[],!e)return"";if(function Ot(u,e,a){F=[],J=[];for(let o=0;o<a;o++)u[o]=o,e[o]=o,F[o]=o}(this.sourceToTarget,this.targetToSource,e.length),!this.checkParameters(a,o))return e;o=this.outputFormat;let c=e;const f=Dt,g=ct((a=this.inputFormat).charAt(1)),_=ct(o.charAt(1)),d=("I"===a.charAt(0)?"L":a.charAt(0))+g,L=("I"===o.charAt(0)?"L":o.charAt(0))+_,B=a.charAt(2)+o.charAt(2);f.defInFormat=d,f.defOutFormat=L,f.defSwap=B;const v=y(e,d,L,B,f);let k=!1;return"R"===o.charAt(1)?k=!0:"C"!==o.charAt(1)&&"D"!==o.charAt(1)||(k="rtl"===this.checkContextual(v)),this.sourceToTarget=F,this.targetToSource=function yt(u){const e=new Array(u.length);for(let a=0;a<u.length;a++)e[u[a]]=a;return e}(this.sourceToTarget),z=this.targetToSource,c=a.charAt(3)===o.charAt(3)?v:"S"===o.charAt(3)?function pt(u,e,a){if(0===e.length)return"";void 0===u&&(u=!0),void 0===a&&(a=!0);const o=(e=String(e)).split("");let c=0,f=1,g=o.length;u||(c=o.length-1,f=-1,g=1);const _=function Ut(u,e,a,o,c){let f=0;const g=[];let _=0;for(let d=e;d*a<o;d+=a)if(st(u[d])||D(u[d])){if("\u0644"===u[d]&&Ct(u,d+a,a,o)){u[d]=Mt(u[d+a],0===f?w:j),d+=a,xt(u,d,a,o),c&&(g[_]=d,_++),f=0;continue}const L=u[d];u[d]=1===f?at(u,d+a,a,o)?It(u[d]):it(u[d],q):!0===at(u,d+a,a,o)?it(u[d],X):it(u[d],Y),D(L)||(f=1),!0===Vt(L)&&(f=0)}else f=0;return g}(o,c,f,g,a);let d="";for(let L=0;L<o.length;L++)a&&Nt(_,_.length,L)>-1?(ft(z,L,!u,-1),F.splice(L,1)):d+=o[L];return d}(k,v,!0):function Rt(u,e,a){if(0===u.length)return"";void 0===a&&(a=!0),void 0===e&&(e=!0);let o="";const c=(u=String(u)).split("");for(let f=0;f<u.length;f++){let g=!1;if(c[f]>="\ufe70"&&c[f]<"\ufeff"){const _=u.charCodeAt(f);c[f]>="\ufef5"&&c[f]<="\ufefc"?(e?(f>0&&a&&" "===c[f-1]?o=o.substring(0,o.length-1)+"\u0644":(o+="\u0644",g=!0),o+=U[(_-65269)/2]):(o+=U[(_-65269)/2],o+="\u0644",f+1<u.length&&a&&" "===c[f+1]?f++:g=!0),g&&(ft(z,f,!0,1),F.splice(f,0,F[f]))):o+=G[_-65136]}else o+=c[f]}return o}(v,k,!0),this.sourceToTarget=F,this.targetToSource=z,this.levels=J,c}_inputFormatSetter(e){if(!ht.test(e))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.inputFormat=e}_outputFormatSetter(e){if(!ht.test(e))throw new Error("dojox/string/BidiEngine: the bidi layout string is wrong!");this.outputFormat=e}checkParameters(e,a){return e?this._inputFormatSetter(e):e=this.inputFormat,a?this._outputFormatSetter(a):a=this.outputFormat,e!==a}checkContextual(e){let a=Z(e);if("ltr"!==a&&"rtl"!==a){try{a=document.dir.toLowerCase()}catch{}"ltr"!==a&&"rtl"!==a&&(a="ltr")}return a}hasBidiChar(e){return Yt.test(e)}}function y(u,e,a,o,c){const f=function mt(u,e,a){if(void 0===e.inFormat&&(e.inFormat=a.defInFormat),void 0===e.outFormat&&(e.outFormat=a.defOutFormat),void 0===e.swap&&(e.swap=a.defSwap),e.inFormat===e.outFormat)return e;const o=e.inFormat.substring(0,1),c=e.outFormat.substring(0,1);let f,g=e.inFormat.substring(1,4),_=e.outFormat.substring(1,4);return"C"===g.charAt(0)&&(f=Z(u),g="ltr"===f||"rtl"===f?f.toUpperCase():"L"===e.inFormat.charAt(2)?"LTR":"RTL",e.inFormat=o+g),"C"===_.charAt(0)&&(f=Z(u),"rtl"===f?_="RTL":"ltr"===f?(f=function Ft(u){const e=u.split("");return e.reverse(),Z(e.join(""))}(u),_=f.toUpperCase()):_="L"===e.outFormat.charAt(2)?"LTR":"RTL",e.outFormat=c+_),e}(u,{inFormat:e,outFormat:a,swap:o},c);if(f.inFormat===f.outFormat)return u;a=f.outFormat,o=f.swap;const g=(e=f.inFormat).substring(0,1),_=e.substring(1,4),d=a.substring(0,1),L=a.substring(1,4);if(c.inFormat=e,c.outFormat=a,c.swap=o,"L"===g&&"VLTR"===a){if("LTR"===_)return c.dir=x,C(u,c);if("RTL"===_)return c.dir=P,C(u,c)}if("V"===g&&"V"===d)return c.dir="RTL"===_?P:x,tt(u,c);if("L"===g&&"VRTL"===a)return"LTR"===_?(c.dir=x,u=C(u,c)):(c.dir=P,u=C(u,c)),tt(u);if("VLTR"===e&&"LLTR"===a)return c.dir=x,C(u,c);if("V"===g&&"L"===d&&_!==L)return u=tt(u),"RTL"===_?y(u,"LLTR","VLTR",o,c):y(u,"LRTL","VRTL",o,c);if("VRTL"===e&&"LRTL"===a)return y(u,"LRTL","VRTL",o,c);if("L"===g&&"L"===d){const B=c.swap;return c.swap=B.substr(0,1)+"N","RTL"===_?(c.dir=P,u=C(u,c),c.swap="N"+B.substr(1,2),c.dir=x,u=C(u,c)):(c.dir=x,u=C(u,c),c.swap="N"+B.substr(1,2),u=y(u,"VLTR","LRTL",c.swap,c)),u}return u}function Z(u){const e=/[A-Za-z\u05d0-\u065f\u066a-\u06ef\u06fa-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]/.exec(u);return e?e[0]<="z"?"ltr":"rtl":""}function C(u,e){const a=u.split(""),o=[];return ut(a,o,e),function St(u,e,a){if(0!==a.hiLevel&&a.swap.substr(0,1)!==a.swap.substr(1,2))for(let o=0;o<u.length;o++)1===e[o]&&(u[o]=kt(u[o]))}(a,o,e),ot(2,a,o,e),ot(1,a,o,e),J=o,a.join("")}function ut(u,e,a){const o=u.length,c=a.dir?K:et;let f=0,g=-1;const _=[],d=[];a.hiLevel=a.dir,a.lastArabic=!1,a.hasUbatAl=!1,a.hasUbatB=!1,a.hasUbatS=!1;for(let L=0;L<o;L++)_[L]=Et(u[L]);for(let L=0;L<o;L++){const B=f,v=vt(u,_,d,L,a);d[L]=v,f=c[B][v];const k=240&f;f&=15;const rt=c[f][Pt];if(e[L]=rt,k>0)if(16===k){for(let V=g;V<L;V++)e[V]=1;g=-1}else g=-1;if(c[f][jt])-1===g&&(g=L);else if(g>-1){for(let V=g;V<L;V++)e[V]=rt;g=-1}5===_[L]&&(e[L]=0),a.hiLevel|=rt}a.hasUbatS&&function wt(u,e,a,o){for(let c=0;c<a;c++)if(6===u[c]){e[c]=o.dir;for(let f=c-1;f>=0&&8===u[f];f--)e[f]=o.dir}}(_,e,o,a)}function Et(u){const e=u.charCodeAt(0),a=Lt[e>>8];return a<100?a:Bt[a-100][255&e]}function tt(u,e){const a=u.split("");if(e){const o=[];ut(a,o,e),J=o}return a.reverse(),F.reverse(),a.join("")}function Nt(u,e,a){for(let o=0;o<e;o++)if(u[o]===a)return o;return-1}function st(u){for(let e=0;e<I.length;e++)if(u>=I[e]&&u<=H[e])return!0;return!1}function at(u,e,a,o){for(;e*a<o&&D(u[e]);)e+=a;return!!(e*a<o&&st(u[e]))}function Ct(u,e,a,o){for(;e*a<o&&D(u[e]);)e+=a;let c=" ";if(!(e*a<o))return!1;c=u[e];for(let f=0;f<U.length;f++)if(U[f]===c)return!0;return!1}function ot(u,e,a,o){if(o.hiLevel<u)return;if(1===u&&o.dir===P&&!o.hasUbatB)return e.reverse(),void F.reverse();const c=e.length;let f,g,_,d,L,B=0;for(;B<c;){if(a[B]>=u){for(f=B+1;f<c&&a[f]>=u;)f++;for(g=B,_=f-1;g<_;g++,_--)d=e[g],e[g]=e[_],e[_]=d,L=F[g],F[g]=F[_],F[_]=L;B=f}B++}}function vt(u,e,a,o,c){return{UBAT_L:()=>(c.lastArabic=!1,0),UBAT_R:()=>(c.lastArabic=!1,1),UBAT_ON:()=>4,UBAT_AN:()=>3,UBAT_EN:()=>c.lastArabic?3:2,UBAT_AL:()=>(c.lastArabic=!0,c.hasUbatAl=!0,1),UBAT_WS:()=>4,UBAT_CS:()=>{let g,_;return o<1||o+1>=e.length||2!==(g=a[o-1])&&3!==g||2!==(_=e[o+1])&&3!==_?4:(c.lastArabic&&(_=3),_===g?_:4)},UBAT_ES:()=>2===(o>0?a[o-1]:5)&&o+1<e.length&&2===e[o+1]?2:4,UBAT_ET:()=>{if(o>0&&2===a[o-1])return 2;if(c.lastArabic)return 4;let g=o+1;const _=e.length;for(;g<_&&e[g]===T;)g++;return g<_&&2===e[g]?2:4},UBAT_NSM:()=>{if("VLTR"===c.inFormat){const g=e.length;let _=o+1;for(;_<g&&e[_]===n;)_++;if(_<g){const d=u[o].charCodeAt[0],B=e[_];if((d>=1425&&d<=2303||64286===d)&&(1===B||7===B))return 1}}return o<1||5===e[o-1]?4:a[o-1]},UBAT_B:()=>(c.lastArabic=!0,c.hasUbatB=!0,c.dir),UBAT_S:()=>(c.hasUbatS=!0,4),UBAT_LRE:()=>(c.lastArabic=!1,4),UBAT_RLE:()=>(c.lastArabic=!1,4),UBAT_LRO:()=>(c.lastArabic=!1,4),UBAT_RLO:()=>(c.lastArabic=!1,4),UBAT_PDF:()=>(c.lastArabic=!1,4),UBAT_BN:()=>4}[dt[e[o]]]()}function kt(u){let e,a=0,o=E.length-1;for(;a<=o;)if(e=Math.floor((a+o)/2),u<E[e][0])o=e-1;else{if(!(u>E[e][0]))return E[e][1];a=e+1}return u}function Vt(u){for(let e=0;e<$.length;e++)if($[e]===u)return!0;return!1}function It(u){for(let e=0;e<N.length;e++)if(u===N[e])return Q[e];return u}function it(u,e){for(let a=0;a<N.length;a++)if(u===N[a])return e[a];return u}function D(u){return u>="\u064b"&&u<="\u0655"}function ct(u){return"L"===u?"LTR":"R"===u?"RTL":"C"===u?"CLR":"D"===u?"CRL":""}function xt(u,e,a,o){for(;e*a<o&&D(u[e]);)e+=a;return e*a<o&&(u[e]=" ",!0)}function Mt(u,e){for(let a=0;a<U.length;a++)if(u===U[a])return e[a];return u}function ft(u,e,a,o){for(let c=0;c<u.length;c++)(u[c]>e||!a&&u[c]===e)&&(u[c]+=o)}let F=[],z=[],J=[];const Dt={dir:0,defInFormat:"LLTR",defoutFormat:"VLTR",defSwap:"YN",inFormat:"LLTR",outFormat:"VLTR",swap:"YN",hiLevel:0,lastArabic:!1,hasUbatAl:!1,hasBlockSep:!1,hasSegSep:!1,defOutFormat:""},Pt=5,jt=6,x=0,P=1,ht=/^[(I|V)][(L|R|C|D)][(Y|N)][(S|N)][N]$/,Yt=/[\u0591-\u06ff\ufb1d-\ufefc]/},86575:(nt,M,O)=>{O.d(M,{B1:()=>E,DQ:()=>I,DT:()=>Q,JJ:()=>U,Or:()=>H,_U:()=>w,k3:()=>K,sX:()=>s});const E=Number.POSITIVE_INFINITY,U=Math.PI,w=2*U,N=128/U,Q=U/180,G=1/Math.LN2;function I(A,t){return(A%=t)>=0?A:A+t}function H(A){return I(A*N,256)}function K(A){return Math.log(A)*G}function s(A,t,b){return A*(1-b)+t*b}},84439:(nt,M,O)=>{O.d(M,{Z:()=>E});class E{constructor(w=0,j=0,N=0,Y=0){this.x=w,this.y=j,this.width=N,this.height=Y}get isEmpty(){return this.width<=0||this.height<=0}union(w){this.x=Math.min(this.x,w.x),this.y=Math.min(this.y,w.y),this.width=Math.max(this.width,w.width),this.height=Math.max(this.height,w.height)}}}}]);