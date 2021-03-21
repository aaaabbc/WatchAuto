const path = require('path')
const express = require('express')
const app = express()
const https = require('https')
const data = require('./value.json')
const { get } = require('http')

const biliUrlFH = 'https://api.bilibili.com/x/space/arc/search?mid='
const biliUrlSH = '&pn=1&ps=25&index=1&jsonp=jsonp'

function getData(){
    let outputData = {}
    for(let key in data){
        let biliUrl = biliUrlFH + key + biliUrlSH
        https.get(biliUrl, (res) => {
            let webData = '';  //接口数据
        
            res.on('data', (chunk) => {
                webData += chunk;    //拼接数据块
            });
            res.on('end', function() {
                let json = JSON.parse(webData); //解析json
                let bvid = json.data.list.vlist[0].bvid // 最新视频bvid
                let title = json.data.list.vlist[0].title
                outputData[data[key].name] = []
                outputData[data[key].name].push(...[bvid,title])
                // up名字是键名，键值是一个数组，bvid的index是0，title的是1
                // console.log(bvid)
                // console.log(outputData)
            })
        }).on('error', () => 
            console.log('获取数据出错!')
        );
    }
    console.log('updated...')
    return outputData
}

let output =getData()

setInterval(function(){
    output = getData()
},1000*60*60)


app.get('/api/getVideo', (req,res,next) => {
    res.json({
        data:output
    })
})

app.listen(3000)
console.log('success listen at port:3000......')